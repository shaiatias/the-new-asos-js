import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(
    private http: HttpClient,
    private router: Router) { }

  logout() {
    this.http
      .post("/api/users/logout", {})
      .subscribe(
        res => {
          this.router.navigateByUrl("/login");
        },
        err => {
          console.error(err);
        }
      )
  }
}
