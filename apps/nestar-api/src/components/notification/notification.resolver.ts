import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard';
import { NotificationService } from './notification.service';
import { Notification } from '../../libs/dto/notification/notification';

import { AuthMember } from '../auth/decorators/authMember.decorator';
import { ObjectId } from 'mongoose';
import { NotificationInput } from '../../libs/dto/notification/notification.input';

@Resolver()
export class NotificationResolver {
  constructor(private readonly notificationService: NotificationService) {}

  @UseGuards(AuthGuard)
  @Query(() => [Notification])
  async getMyNotifications(
    @AuthMember('_id') memberId: ObjectId
  ): Promise<Notification[]> {
    return this.notificationService.getMyNotifications(memberId);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Notification)
  async createNotification(
    @Args('input') input: NotificationInput,
    @AuthMember('_id') authorId: ObjectId
  ): Promise<Notification> {
    return this.notificationService.createNotification(input, authorId);
  }
}
