import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewService } from './review.service';
import { ReviewResolver } from './review.resolver';
import ReviewSchema from '../../schemas/review.model';
import PropertySchema from '../../schemas/property.model'; // 🟢 qo‘shildi
import { MemberModule } from '../member/member.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Review', schema: ReviewSchema },
      { name: 'Property', schema: PropertySchema }, // 🟢 MUHIM QO‘SHILDI
    ]),
    MemberModule,
    AuthModule,
  ],
  providers: [ReviewService, ReviewResolver],
  exports: [ReviewService],
})
export class ReviewModule {}
