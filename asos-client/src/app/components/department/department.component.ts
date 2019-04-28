import { Router, ActivatedRoute } from "@angular/router";
import { ProductsService } from "./../../services/products/products.service";
import { Component, OnInit } from "@angular/core";
import { IProduct } from "src/app/models/product";

@Component({
	selector: "app-department",
	templateUrl: "./department.component.html",
	styleUrls: ["./department.component.css"]
})
export class DepartmentComponent implements OnInit {
	products: IProduct[];
	department: string;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private productsService: ProductsService
	) {}

	ngOnInit() {
		this.department = this.route.snapshot.params.department;
		this.productsService
			.getProductByDepartment(this.department)
			.subscribe(	
				next => (this.products = next),
				err => this.onFetchError(err)
			);
	}

	onFetchError(e) {
		console.error(e);
	}
}
