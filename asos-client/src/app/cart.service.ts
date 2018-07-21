import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { BehaviorSubject } from '../../node_modules/rxjs';
import { tap, map } from '../../node_modules/rxjs/operators';

interface CartContent {
  items: IProduct[]
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartContent = new BehaviorSubject<CartContent>(null);

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {
    this.syncCartContent();
  }

  private syncCartContent() {
    return this.http
      .get("/api/cart")
      .pipe(
        map(items => <CartContent> items),
        tap(items => this.cartContent.next(items))
      );
  }

  getCart() {
    return this.cartContent.asObservable();
  }

  async addToCart(product: IProduct, amount: number) {

    if (!this.authService.isAuthenticated()) {
      throw new Error("user is not logged in");
    }

    // send update
    const body = { product, amount };
    await this.http.post("/api/cart/add-item", body).toPromise();

    // update cart subject
    await this.syncCartContent().toPromise();
  }
}
