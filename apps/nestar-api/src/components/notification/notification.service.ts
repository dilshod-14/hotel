import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Notification } from '../../libs/dto/notification/notification'; // ✅ DTO tip

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel('Notification')
    private readonly notificationModel: Model<Notification> // ✅ Aniq type annotation
  ) {}

  async getMyNotifications(memberId: ObjectId): Promise<Notification[]> {
    return this.notificationModel.find({ receiverId: memberId }).lean();
  }

  async createNotification(input: any, authorId: ObjectId): Promise<Notification> {
    return this.notificationModel.create({ ...input, authorId });
  }
}
