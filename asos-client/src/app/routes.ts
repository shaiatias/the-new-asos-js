import { ProductDetailsComponent } from './product-details/product-details.component';
import { DepartmentComponent } from './department/department.component';
import { AuthGuard } from './_guard/auth.guard';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'cart',
        component: CartComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'department/:name',
        component: DepartmentComponent
    },
    {
        path: 'product/:id',
        component: ProductDetailsComponent
    }
];
