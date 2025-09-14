import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, Length, Max, Min } from 'class-validator';

@InputType()
export class ReviewInput {
  @IsNotEmpty()
  @Field(() => String)
  propertyId: string;  // 🟢 shu kerak — string bo'ladi

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(5)
  @Field(() => Int)
  rating: number;

  @IsNotEmpty()
  @Length(3, 500)
  @Field(() => String)
  commentContent: string;
}

