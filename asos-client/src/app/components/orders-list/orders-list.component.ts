import { IOrder } from './../../models/order';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';

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
    'userId',
    'orderId',
    'createdDate',
    'totalPrice',
  ];

  dataSource = new MatTableDataSource<IOrder>([]);

  ngOnInit() {
    
    this.dataSource.paginator = this.paginator;

    this.orders$.subscribe(
      data => this.dataSource.data = data
    );
    
  }
}
