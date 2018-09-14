import { User } from './user';
import { IProduct } from './product';

export interface IOrder {
	_id?: any;
	user: string | User;
	totalPrice?: number;
	products: IProduct[];
}
