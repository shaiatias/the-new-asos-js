import { User } from './user';
import { IProduct } from './product';

export interface IOrder {
	_id?: any;
	user: string | User;
	totalPrice?: number;
	products: IProduct[];
}


export interface ChargeResult {
	amount: number;
	chargeDate: Date;
	transactionId: number;
}


export interface IUser {
	roles: string[];
	_id: string;
	username: string;
	email: string;
	name: string;
	password: string;
}

export interface IOrderDetails {
	chargeResult: ChargeResult;
	products: IProduct[];
	totalPrice: number;
	_id: string;
	user: IUser;
	createdDate: Date;
}
