import { CartService } from './../../services/cart/cart.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  loggedIn: Observable<boolean> = this.auth.isAuthenticated$();

  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthenticationService,
    private cartService: CartService) {}

  logout() {
    this.auth
      .logout()
      .then(() => this.router.navigate(['/']));
  }

  goToCart(){
    this.cartService.syncCartContent().toPromise().then(() => this.router.navigate(['/cart']))
  }
}
