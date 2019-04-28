import { CartService } from "./../../services/cart/cart.service";
import { Observable } from "rxjs";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication/authentication.service";
import { ICart } from "../../models/cart";

@Component({
	selector: "navigation",
	templateUrl: "./navigation.component.html",
	styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent {
	loggedIn$: Observable<boolean> = this.auth.isAuthenticated$();
	isAdmin$: Observable<boolean> = this.auth.isAdmin$();
	isSeller$: Observable<boolean> = this.auth.isSeller$();

	cart$: Observable<ICart>;

	constructor(
		private router: Router,
		private auth: AuthenticationService,
		private cartService: CartService
	) {}

	logout() {
		this.auth.logout().then(() => this.router.navigate(["/"]));
	}

	goToCart() {
		this.cartService
			.syncCartContent()
			.toPromise()
			.then(() => this.router.navigate(["/cart"]));
	}

	ngOnInit() {
		this.cartService.syncCartContent().toPromise();
		this.cart$ = this.cartService.getCart();
	}
}
