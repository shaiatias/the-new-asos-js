import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { IProduct } from '../../models/product';
import { ICart } from "../../models/cart";

const initialValue: ICart = { "products": [{ "_id": "5b675f06ccf8822ee82873a1", "imageUrl": "assets/item_111.jpg", "name": "t shirt1", "price": 25, "department": "shirts", "description": "simple t shirt", "__v": 0 }, { "_id": "5b675f06ccf8822ee82873a1", "imageUrl": "assets/item_111.jpg", "name": "t shirt1", "price": 25, "department": "shirts", "description": "simple t shirt", "__v": 0 }, { "_id": "5b675f06ccf8822ee82873a1", "imageUrl": "assets/item_111.jpg", "name": "t shirt1", "price": 25, "department": "shirts", "description": "simple t shirt", "__v": 0 }, { "_id": "5b675f06ccf8822ee82873a1", "imageUrl": "assets/item_111.jpg", "name": "t shirt1", "price": 25, "department": "shirts", "description": "simple t shirt", "__v": 0 }, { "_id": "5b675f06ccf8822ee82873a1", "imageUrl": "assets/item_111.jpg", "name": "t shirt1", "price": 25, "department": "shirts", "description": "simple t shirt", "__v": 0 }, { "_id": "5b675f06ccf8822ee82873a1", "imageUrl": "assets/item_111.jpg", "name": "t shirt1", "price": 25, "department": "shirts", "description": "simple t shirt", "__v": 0 }, { "_id": "5b675f06ccf8822ee82873a1", "imageUrl": "assets/item_111.jpg", "name": "t shirt1", "price": 25, "department": "shirts", "description": "simple t shirt", "__v": 0 }, { "_id": "5b675f06ccf8822ee82873a1", "imageUrl": "assets/item_111.jpg", "name": "t shirt1", "price": 25, "department": "shirts", "description": "simple t shirt", "__v": 0 }, { "_id": "5b675f06ccf8822ee82873a4", "imageUrl": "assets/item_111.jpg", "name": "t shirt4", "price": 25, "department": "shirts", "description": "simple t shirt", "__v": 0 }, { "_id": "5b675f06ccf8822ee82873a4", "imageUrl": "assets/item_111.jpg", "name": "t shirt4", "price": 25, "department": "shirts", "description": "simple t shirt", "__v": 0 }], "totalPrice": 250 }

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartContent = new BehaviorSubject<ICart>(initialValue);

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  syncCartContent() {

    return this.http
      .get("/api/cart/")
      .pipe(
        // map(items => <ICart>items),
        tap(items => this.cartContent.next(<ICart>items))
      );
  }

  getCart() {
    return this.cartContent.asObservable();
  }

  async addToCart(product: IProduct, amount: number) {
    // send update
    const body = { product, amount };

    try {
      await this.http.post("/api/cart/add-item", body).toPromise();

      // update cart subject
      await this.syncCartContent().toPromise();
    }

    catch (err) {

      if (err.status === 401) {
        this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.routerState.snapshot.url } });
      }

      else {
        throw err;
      }
    }
  }

  //decreases the qty of a specific product in the cart
  async removePdtFromCart(product: IProduct, amount: number) {
    // send update
    const body = { product, amount };

    try {
      await this.http.post("/api/cart/remove-item", body).toPromise();

      // update cart subject
      await this.syncCartContent().toPromise();
    }

    catch (err) {

      if (err.status === 401) {
        this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.routerState.snapshot.url } });
      }

      else {
        throw err;
      }
    }
  }
}

