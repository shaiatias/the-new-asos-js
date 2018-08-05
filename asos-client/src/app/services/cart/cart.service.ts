import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../authentication/authentication.service';
import { Injectable } from '@angular/core';
import { IProduct } from '../../models/product';
import { BehaviorSubject } from '../../../../node_modules/rxjs';
import { tap, map } from '../../../../node_modules/rxjs/operators';
import { Router, ActivatedRoute, RouterStateSnapshot } from '@angular/router';

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
    private authService: AuthenticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.syncCartContent();
  }

  private syncCartContent() {
    return this.http
      .get("/api/cart")
      .pipe(
        map(items => <CartContent>items),
        tap(items => this.cartContent.next(items))
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

