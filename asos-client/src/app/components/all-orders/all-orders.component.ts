import { OrdersService } from './../../services/orders/orders.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IOrder } from '../../models/order';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  allOrders$: Observable<IOrder[]> = this.ordersService.getAll();

  constructor(
		private ordersService: OrdersService
	) {
	}

  ngOnInit() {
  }

}
