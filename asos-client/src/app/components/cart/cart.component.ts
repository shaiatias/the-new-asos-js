import { tap, map, filter, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CartService } from './../../services/cart/cart.service';
import { ICartGroup, IProductInCart } from './../../models/cart';
import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import countBy from "lodash/countBy";

const sleep = (time) => new Promise(resolve => setTimeout(resolve, time));

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cart$: Observable<ICartGroup>;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {

    this.cart$ = this.cartService
      .getCart()
      .pipe(
        filter(cart => cart !== null),
        map(cart => {
          
          const productGroup = countBy(cart.products, '_id');

          let newCart: ICartGroup = {
            totalPrice: cart.totalPrice,
            products: Object
            .keys(productGroup)
            .map((key, index, array) => ({ 
              item: cart.products.find(item => item._id.toString() === key), 
              quantity: productGroup[key] 
            })),
            itemCount: cart.products.length
          };

          return newCart;
        })
      );
  }

  updateQty(product, qty) {
    //need to add the qty to the existing product qty and save
  }

  addPdtToCart(product) {
    this.cartService.addToCart(product, 1)
  }

  removePdtFromCart(product) {
    this.cartService.removePdtFromCart(product, 1)
  }

}
