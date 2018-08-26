import {PaymentDetails} from './payment-details';

export class User {
	id: string;
	username: string;
	email: string;
	name: string;
	password: string;
	passwordConfirm: string;
	roles: string[] = [];
	paymentDetails?: PaymentDetails = {};
}
