import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule }    from '@angular/forms';

import {AlertService} from './services/alerts/alerts.service';
import {AuthGuard} from './services/_guard/auth.guard';
import {AuthenticationService} from './services/authentication/authentication.service';
import {CartService} from './services/cart/cart.service';
import {ProductsService} from './services/products/products.service';
import {UserService} from './services/user/user.service';


import { AppComponent } from './app.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatBottomSheetModule, MatInputModule } from '@angular/material';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { RecommendedProductsComponent } from './components/recommended-products/recommended-products.component';
import { DepartmentComponent } from './components/department/department.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShareProductComponent } from './components/share-product/share-product.component';
import { RegisterComponent } from './components/register/register.component';
import { AlertComponent } from './components/alert/alert.component';

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
    AlertComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,  
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
    BrowserAnimationsModule
  ],
  providers: [
    AlertService,
    AuthGuard,
    AuthenticationService,
    CartService,
    ProductsService,
    UserService

  ],
  entryComponents: [AppComponent, ShareProductComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
