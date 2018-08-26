import {IProduct} from './product';

export interface IOrder {
	_id?: any;
	totalPrice?: number;
	products: IProduct[];
}
