import { Component, OnInit, Input } from "@angular/core";
import { IProduct } from "src/app/models/product";

@Component({
	selector: "app-products-list",
	templateUrl: "./products-list.component.html",
	styleUrls: ["./products-list.component.css"]
})
export class ProductsListComponent implements OnInit {
	@Input()
	products: IProduct[];

	@Input()
	showDepartment = false;

	constructor() {}

	ngOnInit() {}
}
