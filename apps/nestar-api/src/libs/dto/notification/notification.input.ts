import { Field, InputType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { NotificationGroup, NotificationStatus, NotificationType } from '../../enums/notification.enum';

@InputType()
export class NotificationInput {
  @Field(() => String)
  notificationTitle: string;

  @Field(() => String)
  notificationDesc: string;

  @Field(() => NotificationType)
  notificationType: NotificationType;

  @Field(() => NotificationGroup)
  notificationGroup: NotificationGroup;

  @Field(() => NotificationStatus, { nullable: true })
  notificationStatus?: NotificationStatus;

  @Field(() => String)
  receiverId: ObjectId;
}
