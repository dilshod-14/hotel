import { ObjectId } from 'mongoose';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Member } from '../member/member';

@ObjectType()
export class Review {
  @Field(() => String)
  _id: ObjectId;

  @Field(() => String)
  propertyId: ObjectId;

  @Field(() => String)
  memberId: ObjectId;

  @Field(() => Int)
  rating: number;

  @Field(() => String)
  commentContent: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  // aggregation orqali keladi
  @Field(() => Member, { nullable: true })
  memberData?: Member;
}
