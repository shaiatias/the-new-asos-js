import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatBottomSheetModule } from '@angular/material';
import { NavigationComponent } from './navigation/navigation.component';
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
    ShareProductComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatBottomSheetModule,
    BrowserAnimationsModule
  ],
  providers: [
  ],
  entryComponents: [AppComponent, ShareProductComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
