import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient) { }

  getRecommendedProducts(): Observable<any> {
    return this.http.get("/api/products/recommended");
  }

  getProductById(id: number): Observable<any> {
    return this.http.get(`/api/products/${id}`);
  }

  likeItem(product: IProduct) {

  }
}
