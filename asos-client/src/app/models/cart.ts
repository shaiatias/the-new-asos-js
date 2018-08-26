import {IProduct} from './product';

export interface ICart {
	_id?: any,
	totalPrice?: number,
	products: IProduct[]
}

export interface IProductInCart {
	_id?: any,
	item: IProduct,
	quantity: number
}

export interface ICartGroup {
	_id?: any,
	totalPrice?: number,
	products: IProductInCart[],
	itemCount: number
}
