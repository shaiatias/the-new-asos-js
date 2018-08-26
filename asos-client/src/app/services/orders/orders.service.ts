import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IOrder} from '../../models/order';

@Injectable()
export class OrdersService {

	constructor(private http: HttpClient) {
	}

	getAll() {
		return this.http.get<IOrder[]>(`/api/orders`);
	}

	getById(id: number) {
		return this.http.get(`/api/orders/` + id);
	}
}
