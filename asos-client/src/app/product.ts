
export type ProductDepartment = 
  "shirts";

export interface IProduct {
    name: string,
    imageUrl: string,
    price: string,
    description: string,
    department: ProductDepartment
  }
  