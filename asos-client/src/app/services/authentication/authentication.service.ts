import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

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

        }));
  }

  logout() {

    return this.http.post("/api/users/logout", {})
      .toPromise()
      .then(() => { this.clearStorage() });
  }

  private clearStorage() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

}
