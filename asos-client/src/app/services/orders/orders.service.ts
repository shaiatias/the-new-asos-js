import { IOrderDetails } from './../../models/order';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IOrder} from '../../models/order';

@Injectable()
export class OrdersService {

	constructor(private http: HttpClient) {
	}

	getMyOrder() {
		return this.http.get<IOrder[]>(`/api/orders/my-orders`);
	}

	getAll() {
		return this.http.get<IOrder[]>(`/api/orders/all-orders`);
	}

	getDetailsById(id: string) {
		return this.http.get<IOrderDetails>(`/api/orders/details/${id}`);
	}
}
