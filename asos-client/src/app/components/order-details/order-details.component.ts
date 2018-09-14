import { OrdersService } from './../../services/orders/orders.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IOrder } from '../../models/order';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  order$: Observable<IOrder>;

  constructor(
    private route: ActivatedRoute,
    private ordersService: OrdersService
  ) { }

  ngOnInit() {
    
    this.order$ = this.ordersService.getDetailsById(this.route.snapshot.params.id)
  }
}
