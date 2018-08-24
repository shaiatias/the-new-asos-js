import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication/authentication.service';
import { tap, map, filter, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CartService } from './../../services/cart/cart.service';
import { ICartGroup, IProductInCart } from './../../models/cart';
import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import countBy from "lodash/countBy";
import { User } from '../../models/user';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cart$: Observable<ICartGroup>;
  public user: User = new User();
  public submited= false;
  fNameMissing=false;
  lNameMissing=false;
  addressMissing=false;
  cardMissing=false; 
  cvvMissing=false; 

  constructor(
    private cartService: CartService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.user =  JSON.parse(this.authenticationService.getUser());
    this.user.paymentDetails= {};
    console.log("user", this.user)
   }

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

  addPdtToCart(product) {
    this.cartService.addToCart(product, 1)
  }

  removePdtFromCart(product) {
    this.cartService.removePdtFromCart(product, 1)
  }

  removeAllItemsFromCart(product){
    this.cartService.removeAllItemsFromCart(product);
  }

  pay(cartId){
    debugger
    this.submited = true;
    let valid= this.validateDetails(this.user);
    if( !valid){
      this.submited = false;
      alert("Missing mandatory fields");
    }

    this.cartService.pay(this.user, cartId).then(()=>{
      debugger;
      this.submited = false;
      //go to orders page
      this.router.navigate(["/my-orders"]);
    })


  }

  validateDetails(user: User){
    let res= true;

    if(user.paymentDetails.firstName =="")  {res=false; this.fNameMissing = true;} 
    else if(user.paymentDetails.lastName =="") {res=false; this.lNameMissing = true;} 
    else if(user.paymentDetails.address =="") {res=false; this.addressMissing = true;} 
    else if(user.paymentDetails.cardNumber =="") {res=false; this.cardMissing = true;} 
    else if(user.paymentDetails.cvv =="") {res=false; this.cvvMissing = true;} 

    return res;
  }

}
