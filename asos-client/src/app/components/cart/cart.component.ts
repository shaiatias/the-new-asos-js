import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CartService } from './../../services/cart/cart.service';
import { ICart } from './../../models/cart';
import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private cart$: Observable<ICart>;
  private cart: ICart={products: [], totalPrice:100};

  constructor(
    private cartService: CartService,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    
    this.cart$ = this.cartService.getCart();

    this.cartService.getCart().subscribe(
      data => this.cart = data,
      err => console.error(err)
    )
  }

  updateQty(product,qty){
    //need to add the qty to the existing product qty and save
  }


}
