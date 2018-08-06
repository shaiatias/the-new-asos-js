import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { IProduct } from '../../models/product';
import { ICart } from "../../models/cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartContent = new BehaviorSubject<ICart>(null);

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

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
}

