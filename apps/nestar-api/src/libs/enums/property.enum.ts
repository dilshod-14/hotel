import { registerEnumType } from '@nestjs/graphql';

export enum PropertyType {
	STANDARD = 'STANDARD', // Oddiy xona
	DELUXE = 'DELUXE', // Deluxe xona
	SUITE = 'SUITE', // Suite xona
	FAMILY = 'FAMILY', // Oila uchun
	SINGLE = 'SINGLE', // Bir kishilik
	DOUBLE = 'DOUBLE', // Ikki kishilik
}
registerEnumType(PropertyType, {
	name: 'PropertyType',
});

export enum PropertyStatus {
	ACTIVE = 'ACTIVE',
	BOOKED = 'BOOKED',
	DELETE = 'DELETE',
}
registerEnumType(PropertyStatus, {
	name: 'PropertyStatus',
});

export enum PropertyLocation {
	SEOUL = 'SEOUL',
	BUSAN = 'BUSAN',
	INCHEON = 'INCHEON',
	DAEGU = 'DAEGU',
	GYEONGJU = 'GYEONGJU',
	GWANGJU = 'GWANGJU',
	CHONJU = 'CHONJU',
	DAEJON = 'DAEJON',
	JEJU = 'JEJU',
}
registerEnumType(PropertyLocation, {
	name: 'PropertyLocation',
});
