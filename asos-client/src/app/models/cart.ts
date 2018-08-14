
import { IProduct, IProductInCart } from "./product";

export interface ICart {
    totalPrice?: number,
    products: IProductInCart[]
}