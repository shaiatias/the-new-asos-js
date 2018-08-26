import {ProductsService} from '../../services/products/products.service';
import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {IProduct} from '../../models/product';

@Component({
	selector: 'app-recommended-products',
	templateUrl: './recommended-products.component.html',
	styleUrls: ['./recommended-products.component.css']
})
export class RecommendedProductsComponent implements OnInit {

	recommended: IProduct[] = [];
	filteredProducts: IProduct[];

	constructor(private http: HttpClient,
				private productsService: ProductsService) {
	}

	ngOnInit() {

		this.productsService
			.getRecommendedProducts()
			.subscribe(
				items => this.filteredProducts = this.recommended = items,
				err => this.onFetchError(err)
			);
	}

	filter(query: string) {
		console.log('query', query);
		this.filteredProducts = (query) ? this.recommended.filter(p => p.name.toLowerCase().includes(query.toLowerCase())) : this.recommended;
		console.log('filtered products', this.filteredProducts);
	}

	onFetchError(err) {
		console.error('recommended products', err);
	}

}
