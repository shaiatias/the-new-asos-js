import { RecommendedProductsService } from './../recommended-products.service';
import { IProduct } from './../product';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recommended: IProduct[] | null[] = [,,,,,,];

  constructor(private http: HttpClient,
    private recommendedService: RecommendedProductsService) { }

  ngOnInit() {
    
  //   this.http.get("/api/users/me")
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //       },
  //       err => {
  //         console.error(err);
  //       })

    this.recommendedService
      .getRecommendedProducts()
      .then((items) => this.recommended = items);
  }

}
