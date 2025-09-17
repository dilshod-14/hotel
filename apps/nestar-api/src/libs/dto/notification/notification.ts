import { ObjectId } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { NotificationGroup, NotificationStatus, NotificationType } from '../../enums/notification.enum';
import { Member } from '../member/member';

@ObjectType()
export class Notification {
  @Field(() => String)
  _id: ObjectId;

  @Field(() => NotificationType)
  notificationType: NotificationType;

  @Field(() => NotificationStatus)
  notificationStatus: NotificationStatus;

  @Field(() => NotificationGroup)
  notificationGroup: NotificationGroup;

  @Field(() => String)
  notificationTitle: string;

  @Field(() => String, { nullable: true })
  notificationDesc?: string;

  @Field(() => String)
  authorId: ObjectId;

  @Field(() => String)
  receiverId: ObjectId;

  @Field(() => String, { nullable: true })
  propertyId?: ObjectId;

  @Field(() => String, { nullable: true })
  articleId?: ObjectId;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Member, { nullable: true })
  authorData?: Member;

  @Field(() => Member, { nullable: true })
  receiverData?: Member;
}
