import { Schema } from 'mongoose';

const ReviewSchema = new Schema(
  {
    propertyId: {
      type: Schema.Types.ObjectId,
      ref: 'Property',
      required: true,
    },
    memberId: {
      type: Schema.Types.ObjectId,
      ref: 'Member',
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    commentContent: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, collection: 'reviews' },
);

export default ReviewSchema;
