import { ProductsService } from '../../services/products/products.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-recommended-products',
  templateUrl: './recommended-products.component.html',
  styleUrls: ['./recommended-products.component.css']
})
export class RecommendedProductsComponent implements OnInit {

  recommended: IProduct[] | null[] = [,,,,,,];

  constructor(private http: HttpClient,
    private productsService: ProductsService) { }

  ngOnInit() {
    
    this.productsService
      .getRecommendedProducts()
      .subscribe(
        items => this.recommended = items,
        err => this.onFetchError(err)
      );
  }

  onFetchError(err) {
    console.error(err);
  }

}
