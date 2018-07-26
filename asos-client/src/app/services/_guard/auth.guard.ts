import { AuthenticationService } from '../authentication/authentication.service';

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
 
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
 
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        if (this.authenticationService.isAuthenticated()){
            return true;
        }
 
        else {
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
            return false;
        }
    }
}