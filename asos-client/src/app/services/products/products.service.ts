import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IProduct } from "../../models/product";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class ProductsService {
	constructor(private http: HttpClient, private router: Router) {}

	getRecommendedProducts(): Observable<any> {
		return this.http.get("/api/products/recommended");
	}

	getProductById(id: number): Observable<any> {
		return this.http.get(`/api/products/${id}`);
	}

	getProductByDepartment(department: string): Observable<any> {
		return this.http.get(`/api/products/department/${department}`);
	}

	likeItem(product: IProduct) {}
	async create(product: IProduct) {
		const body = { product };

		try {
			return this.http.post("/api/products/create", body).toPromise();
		} catch (err) {
			if (err.status === 401) {
				this.router.navigate(["/login"], {
					queryParams: {
						returnUrl: this.router.routerState.snapshot.url
					}
				});
			} else {
				throw err;
			}
		}
	}
}
