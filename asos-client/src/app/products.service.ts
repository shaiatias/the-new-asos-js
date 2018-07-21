import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient) { }

  getRecommendedProducts(): Promise<IProduct[]> {

    const items: IProduct[] = [
      {
        id: 1,
        imageUrl: "assets/item_111.jpg",
        name: "t shirt1",
        price: "25$",
        department: "shirts",
        description: "simple t shirt"
      },
      {
        id: 2,
        imageUrl: "assets/item_111.jpg",
        name: "t shirt1",
        price: "25$",
        department: "shirts",
        description: "simple t shirt"
      },
      {
        id: 3,
        imageUrl: "assets/item_111.jpg",
        name: "t shirt1",
        price: "25$",
        department: "shirts",
        description: "simple t shirt"
      },
      {
        id: 4,
        imageUrl: "assets/item_111.jpg",
        name: "t shirt1",
        price: "25$",
        department: "shirts",
        description: "simple t shirt"
      },
      {
        id: 5,
        imageUrl: "assets/item_111.jpg",
        name: "t shirt1",
        price: "25$",
        department: "shirts",
        description: "simple t shirt"
      }
    ];

    return Promise.resolve(items);
  }

  getProductById(id: number): Observable<IProduct> {
    
    return new Observable(sub => {
      setTimeout(() => {
        sub.next({
          id: 5,
          imageUrl: "assets/item_111.jpg",
          name: "t shirt1",
          price: "25$",
          department: "shirts",
          description: "simple t shirt"
        });
      }, 1_000);
    });
  }
}
