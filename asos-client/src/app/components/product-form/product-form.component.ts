import { ProductsService } from './../../services/products/products.service';
import { IProduct } from './../../models/product';
import { DepartementService } from './../../services/departement/departement.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  departments$: Observable<any>;
  product: IProduct = {};

  constructor(private departmentService: DepartementService, private productsService: ProductsService, private router: Router) {
  }

  ngOnInit() {
    this.departments$ = this.departmentService.getAllDepartments();
  }

  save(product) {

    console.log("product", product);

    this.productsService.create(product).then((res) => {
      this.router.navigate(['/'])
    });
    
  }
}
