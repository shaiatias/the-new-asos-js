import { RegisterComponent } from './components/register/register.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { DepartmentComponent } from './components/department/department.component';
import { AuthGuard } from './services/_guard/auth.guard';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";

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
        path: 'register',
        component: RegisterComponent,
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
