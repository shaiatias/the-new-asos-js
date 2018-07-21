import { Observable } from 'rxjs';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from "../product";

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
    private productsService: ProductsService
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

  addToCart() {

  }

  likeItem() {

  }

  shareItem() {
    
  }
}
