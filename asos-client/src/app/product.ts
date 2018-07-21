
export type ProductDepartment = 
  "shirts";

export interface IProduct {
    id: number,
    name: string,
    imageUrl: string,
    price: string,
    description: string,
    department: ProductDepartment
  }
  