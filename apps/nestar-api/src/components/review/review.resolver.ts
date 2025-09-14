import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReviewService } from './review.service';
import { Review } from '../../libs/dto/review/review';
import { ReviewInput } from '../../libs/dto/review/review.input';
import { AuthMember } from '../auth/decorators/authMember.decorator';
import { Types } from 'mongoose';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard';
import { WithoutGuard } from '../auth/guards/without.guard';

@Resolver(() => Review)
export class ReviewResolver {
  constructor(private readonly reviewService: ReviewService) {}

  /** ========================= CREATE ========================= */
  @UseGuards(AuthGuard)
  @Mutation(() => Review)
  public async createReview(
    @AuthMember('_id') memberId: Types.ObjectId,
    @Args('input') input: ReviewInput,
  ): Promise<Review> {
    console.log('Mutation: createReview');
    return await this.reviewService.createReview(memberId, input);
  }

  /** ========================= GET BY PROPERTY ========================= */
  @UseGuards(WithoutGuard)
  @Query(() => [Review])
  public async getReviewsByProperty(
    @Args('propertyId') propertyId: string,
  ): Promise<Review[]> {
    console.log('Query: getReviewsByProperty');
    return await this.reviewService.getReviewsByProperty(propertyId);
  }
}
