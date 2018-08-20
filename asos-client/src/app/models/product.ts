
export type ProductDepartment =
  "shirts";

export interface IProduct {
  _id: string,
  name: string,
  imageUrl: string,
  price: number,
  description: string,
  department: ProductDepartment
}

