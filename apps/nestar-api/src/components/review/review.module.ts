import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewService } from './review.service';
import { ReviewResolver } from './review.resolver';
import ReviewSchema from '../../schemas/review.model';
import { MemberModule } from '../member/member.module';
import { AuthModule } from '../auth/auth.module';
import PropertySchema from '../../schemas/Property.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Review', schema: ReviewSchema },
      { name: 'Property', schema: PropertySchema }, 
    ]),
    MemberModule,
    AuthModule,
  ],
  providers: [ReviewService, ReviewResolver],
  exports: [ReviewService],
})
export class ReviewModule {}
