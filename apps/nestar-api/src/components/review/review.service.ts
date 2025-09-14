import { Injectable, InternalServerErrorException, Inject, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Review } from '../../libs/dto/review/review';
import { ReviewInput } from '../../libs/dto/review/review.input';
import { MemberService } from '../member/member.service';
import { Message } from '../../libs/enums/common.enum';
import { lookupMember } from '../../libs/config';
import { Property } from '../../libs/dto/property/property';

@Injectable()
export class ReviewService {
	constructor(
		@InjectModel('Review') private readonly reviewModel: Model<Review>,
		@InjectModel('Property') private readonly propertyModel: Model<Property>,
		@Inject(forwardRef(() => MemberService))
		private readonly memberService: MemberService,
	) {}

	/** ========================= CREATE ========================= */
	public async createReview(memberId: Types.ObjectId, input: ReviewInput): Promise<Review> {
		try {
			// 1. Review yaratish
			const review = await this.reviewModel.create({
				...input,
				memberId,
				propertyId: new Types.ObjectId(input.propertyId),
			});

			// 2. Shu propertyga oid barcha review larni olib o‘rtacha reytingni hisoblash
			const stats = await this.reviewModel.aggregate([
				{ $match: { propertyId: new Types.ObjectId(input.propertyId) } },
				{ $group: { _id: null, avgRating: { $avg: '$rating' } } },
			]);

			// 3. Property hujjatini yangilash (propertyStars ni Number sifatida saqlash)
			const avgRating = Number(stats[0]?.avgRating || 0);

			await this.propertyModel.findByIdAndUpdate(new Types.ObjectId(input.propertyId), { propertyStars: avgRating });

			return review.toObject();
		} catch (err: any) {
			console.log('Error, ReviewService.createReview:', err.message);
			throw new InternalServerErrorException(Message.CREATE_FAILED);
		}
	}

	/** ========================= GET BY PROPERTY ========================= */
	public async getReviewsByProperty(propertyId: string): Promise<Review[]> {
		try {
			const result = await this.reviewModel
				.aggregate([
					{ $match: { propertyId: new Types.ObjectId(propertyId) } },
					lookupMember,
					{ $unwind: '$memberData' },
					{ $sort: { createdAt: -1 } },
				])
				.exec();

			return result;
		} catch (err: any) {
			console.log('Error, ReviewService.getReviewsByProperty:', err.message);
			throw new InternalServerErrorException(Message.NO_DATA_FOUND);
		}
	}
}
