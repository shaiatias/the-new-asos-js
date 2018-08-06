import { HttpClient } from '@angular/common/http';
import { CartService } from './../../services/cart/cart.service';
import { ICart } from './../../models/cart';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private cart: ICart = { product: [], totalPrice: 111 };

  constructor(
    private cartService: CartService,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    
    

    this.cartService.getCart().subscribe(
      data => this.cart = data,
      err => console.error(err)
    )
  }

  test() {

    this.http.get("aaa", { withCredentials: true });
  }

}
