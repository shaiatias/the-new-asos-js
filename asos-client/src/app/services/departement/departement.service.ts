import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor( private http: HttpClient) { }

  getAllDepartments(){
    return of([{ "id":1, "name":"Shirts"}, {"id": 2, "name":"StreetWear"}, {"id":3, "name": "Jeans"}]);
  }
}
