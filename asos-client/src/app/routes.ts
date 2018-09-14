import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { DepartmentComponent } from './components/department/department.component';
import { AuthGuard } from './services/_guard/auth.guard';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { GuardForRole } from './services/_guard/roles.guard';

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
		path: 'order/:id',
		component: OrderDetailsComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'my-orders',
		component: MyOrdersComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'all-orders',
		component: AllOrdersComponent,
		canActivate: [AuthGuard, GuardForRole("admin")]
	},
	{
		path: 'department/:name',
		component: DepartmentComponent
	},
	{
		path: 'product/:id',
		component: ProductDetailsComponent
	},
	{
		path: 'products/new',
		component: ProductFormComponent,
		canActivate: [AuthGuard, GuardForRole("seller")]
	},
];
