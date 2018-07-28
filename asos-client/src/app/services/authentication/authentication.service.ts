import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loggedIn = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
    this.loggedIn.next(this.isAuthenticated());
  }

  isAuthenticated$(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  isAuthenticated(): boolean {
    let user = localStorage.getItem('currentUser');
    return user != null;
  }

  login(username: string, password: string) {

    return this.http.post<any>('/api/users/login', { username, password })
      .pipe(
        tap(user => {

          // login successful if there's a jwt token in the response
          if (user) {

            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
          }

          // update loggedIn obervable
          this.loggedIn.next(this.isAuthenticated());

        }
      ));
  }

  logout() {

    return this.http.post("/api/users/logout", {})
      .toPromise()
      .then(() => { this.clearStorage() })
      .then(() => { this.loggedIn.next(this.isAuthenticated()) });
  }

  private clearStorage() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

}
