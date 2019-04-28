import { IOrder } from './../../models/order';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  @Input("orders")
  orders$: Observable<IOrder[]>;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  displayedColumns: string[] = [
    'orderId',
    'userId',
    'createdDate',
    'totalPrice',
  ];

  dataSource = new MatTableDataSource<IOrder>([]);

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    this.dataSource.paginator = this.paginator;

    this.orders$.subscribe(
      data => this.dataSource.data = data
    );

  }

  goToOrder(order) {
    this.router.navigate(["order", order._id]);
  }
}
