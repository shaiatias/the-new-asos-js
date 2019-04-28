import { OrdersService } from './../../services/orders/orders.service';
import { Observable } from 'rxjs';
import { IOrder } from './../../models/order';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-my-orders',
	templateUrl: './my-orders.component.html',
	styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

	myOrders$: Observable<IOrder[]>;

	constructor(
		private ordersService: OrdersService
	) {
	}

	ngOnInit() {	
		this.myOrders$ = this.ordersService.getMyOrder();
	}

}
