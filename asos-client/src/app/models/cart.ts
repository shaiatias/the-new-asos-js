
import { IProduct } from "./product";

export interface ICart {
    totalPrice?: number,
    products: IProduct[]
}

export interface IProductInCart {
    item: IProduct,
    quantity: number
}

export interface ICartGroup {
    totalPrice?: number,
    products: IProductInCart[]
}
