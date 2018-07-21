import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(private breakpointObserver: BreakpointObserver,
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
