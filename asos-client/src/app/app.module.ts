import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatBottomSheetModule } from '@angular/material';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { RecommendedProductsComponent } from './recommended-products/recommended-products.component';
import { DepartmentComponent } from './department/department.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShareProductComponent } from './share-product/share-product.component';

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
