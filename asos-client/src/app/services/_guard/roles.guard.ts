import { AuthenticationService } from '../authentication/authentication.service';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

type Role = "admin" | "seller" | "customer";

export function GuardForRole(role: Role) {

    @Injectable({ providedIn: 'root' })
    class RoleGuard implements CanActivate {

        constructor(
            private router: Router,
            private authenticationService: AuthenticationService
        ) {
        }

        canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

            const user = this.authenticationService.getUser();

            if (user && user.roles && user.roles.includes(role)) {
                return true;
            }

            else {
                this.router.navigate(['/'], {queryParams: {returnUrl: state.url}});
                return false;
            }
        }
    }

    return RoleGuard;
}
