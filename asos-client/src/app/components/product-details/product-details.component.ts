import { ShareProductComponent } from './../share-product/share-product.component';
import { CartService } from '../../services/cart/cart.service';
import { Observable } from 'rxjs';
import { ProductsService } from '../../services/products/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from "../../models/product";
import { MatBottomSheet } from '@angular/material';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public productId: number;
  public product: IProduct;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService,
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit() {
    this.productId = this.route.snapshot.params.id;
    this.productsService
      .getProductById(this.productId)
      .subscribe(
        next => this.product = next,
        err => this.onFetchError(err)
      );
  }

  onFetchError(error) {
    console.error(error);
  }

  addToCart(amount: number) {
    this.cartService.addToCart(this.product, amount);
  }

  likeItem() {
    this.productsService.likeItem(this.product);
  }

  shareItem() {
    this.bottomSheet.open(ShareProductComponent, {
      data: {
        product: this.product
      }
    }); 
  }
}
