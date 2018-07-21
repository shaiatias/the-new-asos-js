import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class RecommendedProductsService {

  constructor(
    private http: HttpClient) { }

  getRecommendedProducts(): Promise<IProduct[]> {
    
    const items: IProduct[] = [
      {
        imageUrl: "assets/item_111.jpg",
        name: "t shirt1",
        price: "25$",
        department: "shirts",
        description: "simple t shirt"
      },
      {
        imageUrl: "assets/item_111.jpg",
        name: "t shirt1",
        price: "25$",
        department: "shirts",
        description: "simple t shirt"
      },
      {
        imageUrl: "assets/item_111.jpg",
        name: "t shirt1",
        price: "25$",
        department: "shirts",
        description: "simple t shirt"
      },
      {
        imageUrl: "assets/item_111.jpg",
        name: "t shirt1",
        price: "25$",
        department: "shirts",
        description: "simple t shirt"
      },
      {
        imageUrl: "assets/item_111.jpg",
        name: "t shirt1",
        price: "25$",
        department: "shirts",
        description: "simple t shirt"
      }
    ];
    
    return Promise.resolve(items);
  }
}
