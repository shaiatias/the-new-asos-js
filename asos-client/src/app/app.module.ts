import { DepartementService } from './services/departement/departement.service';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AlertService} from './services/alerts/alerts.service';
import {AuthGuard} from './services/_guard/auth.guard';
import {AuthenticationService} from './services/authentication/authentication.service';
import {CartService} from './services/cart/cart.service';
import {ProductsService} from './services/products/products.service';
import {UserService} from './services/user/user.service';


import {AppComponent} from './app.component';
import {
	MatBadgeModule,
	MatBottomSheetModule,
	MatButtonModule,
	MatCardModule,
	MatChipsModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatSidenavModule,
	MatSnackBarModule,
	MatToolbarModule,
	MatPaginatorModule,
	MatTableModule
} from '@angular/material';
import {NavigationComponent} from './components/navigation/navigation.component';
import {LayoutModule} from '@angular/cdk/layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './components/login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {CartComponent} from './components/cart/cart.component';
import {HomeComponent} from './components/home/home.component';
import {RecommendedProductsComponent} from './components/recommended-products/recommended-products.component';
import {DepartmentComponent} from './components/department/department.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {ShareProductComponent} from './components/share-product/share-product.component';
import {RegisterComponent} from './components/register/register.component';
import {AlertComponent} from './components/alert/alert.component';
import {MyOrdersComponent} from './components/my-orders/my-orders.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { OrdersService } from './services/orders/orders.service';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent,
		LoginComponent,
		CartComponent,
		HomeComponent,
		RecommendedProductsComponent,
		DepartmentComponent,
		ProductDetailsComponent,
		ShareProductComponent,
		RegisterComponent,
		AlertComponent,
		MyOrdersComponent,
		ProductFormComponent,
		OrdersListComponent,
		AllOrdersComponent,
		OrderDetailsComponent,
		ProductsListComponent
	],
	imports: [
		HttpClientModule,
		AppRoutingModule,
		BrowserModule,
		ReactiveFormsModule,
		FormsModule,
		MatGridListModule,
		MatCardModule,
		MatMenuModule,
		MatIconModule,
		MatInputModule,
		MatButtonModule,
		LayoutModule,
		MatToolbarModule,
		MatSidenavModule,
		MatListModule,
		MatBottomSheetModule,
		MatChipsModule,
		MatBadgeModule,
		MatSnackBarModule,
		MatPaginatorModule, 
		MatTableModule,
		BrowserAnimationsModule
	],
	providers: [
		AlertService,
		AuthGuard,
		AuthenticationService,
		CartService,
		ProductsService,
		UserService,
		DepartementService,
		OrdersService

	],
	entryComponents: [AppComponent, ShareProductComponent],
	bootstrap: [AppComponent]
})
export class AppModule {
}
