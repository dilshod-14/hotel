import { Module } from '@nestjs/common';
import { PropertyResolver } from './property.resolver';
import { PropertyService } from './property.service';
import { MongooseModule } from '@nestjs/mongoose';
import MemberSchema from '../../schemas/Member.model';
import { AuthModule } from '../auth/auth.module';
import { ViewModule } from '../view/view.module';
import { MemberResolver } from '../member/member.resolver';
import { MemberService } from '../member/member.service';
import PropertySchema from '../../schemas/Property.model';

@Module({
  	imports: [
		MongooseModule.forFeature([
			{
				name: 'Property',
				schema: PropertySchema,
			},
		]),
		AuthModule,
		ViewModule,
	],
  providers: [PropertyResolver, PropertyService]
})
export class PropertyModule {}
