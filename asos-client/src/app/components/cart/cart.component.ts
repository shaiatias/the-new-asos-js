import { Router } from "@angular/router";
import countBy from "lodash/countBy";
import { filter, map, switchMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";

import { AuthenticationService } from "../../services/authentication/authentication.service";
import { CartService } from "../../services/cart/cart.service";
import { ICartGroup } from "../../models/cart";
import { User } from "../../models/user";

@Component({
	selector: "app-cart",
	templateUrl: "./cart.component.html",
	styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
	public cart$: Observable<ICartGroup>;
	public user: User = new User();
	public submited = false;
	nameMissing = false;
	addressMissing = false;
	cardMissing = false;
	cvvMissing = false;
	expireMonthMissing = false;
	expireYearMissing = false;

	constructor(
		private cartService: CartService,
		private router: Router,
		private authenticationService: AuthenticationService
	) {
		this.user = this.authenticationService.getUser();
		this.user.paymentDetails = {};
	}

	ngOnInit() {
		this.cart$ = this.cartService.syncCartContent().pipe(
			switchMap(() => this.cartService.getCart()),
			filter(cart => cart !== null),
			map(cart => {
				const productGroup = countBy(cart.products, "_id");

				const newCart: ICartGroup = {
					totalPrice: cart.totalPrice,
					products: Object.keys(productGroup).map(
						(key, index, array) => ({
							item: cart.products.find(
								item => item._id.toString() === key
							),
							quantity: productGroup[key]
						})
					),
					itemCount: cart.products.length
				};

				return newCart;
			})
		);
	}

	addPdtToCart(product) {
		this.cartService.addToCart(product, 1);
	}

	removePdtFromCart(product) {
		this.cartService.removePdtFromCart(product, 1);
	}

	removeAllItemsFromCart(product) {
		this.cartService.removeAllItemsFromCart(product);
	}

	pay(cartId) {
		this.submited = true;
		const valid = this.validateDetails(this.user);

		if (!valid) {
			this.submited = false;
			alert("Missing mandatory fields");
		}

		this.cartService.pay(this.user, cartId).then(() => {
			this.submited = false;
			this.router.navigate(["/my-orders"]);
		});
	}

	validateDetails(user: User) {
		let res = true;

		if (user.paymentDetails.name === "") {
			res = false;
			this.nameMissing = true;
		} else if (user.paymentDetails.address === "") {
			res = false;
			this.addressMissing = true;
		} else if (user.paymentDetails.cardNumber === "") {
			res = false;
			this.cardMissing = true;
		} else if (user.paymentDetails.expireMonth === "") {
			res = false;
			this.expireMonthMissing = true;
		} else if (user.paymentDetails.expireYear === "") {
			res = false;
			this.expireYearMissing = true;
		} else if (user.paymentDetails.cvv === "") {
			res = false;
			this.cvvMissing = true;
		}

		return res;
	}
}
