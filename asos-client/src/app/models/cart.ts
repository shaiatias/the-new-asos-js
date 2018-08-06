
import { IProduct } from "./product";

export interface ICart {
    totalPrice: number,
    product: IProduct[]
}