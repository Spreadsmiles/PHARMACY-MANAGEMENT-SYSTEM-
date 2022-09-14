import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './home/profile/profile.component';
import { AdminDashboardComponent } from './home/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './home/user-dashboard/user-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { CartService } from 'cartService/cart.service';
import { CartComponent } from './home/cart/cart.component';
import { NavComponent } from './home/nav/nav.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './pharmacy/category/category.component';
import { ShopComponent } from './pharmacy/shop/shop.component';
import { DrugsComponent } from './home/admin-dashboard/drugs/drugs.component';
import { SupplierComponent } from './home/admin-dashboard/supplier/supplier.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { BillingComponent } from './home/billing/billing.component';
import { OdersummaryComponent } from './home/billing/odersummary/odersummary.component';
import { PoderComponent } from './home/admin-dashboard/poder/poder.component';
import { DrugsdetailsComponent } from './home/admin-dashboard/drugsdetails/drugsdetails.component';
import { SupplierdetailsComponent } from './home/admin-dashboard/supplierdetails/supplierdetails.component';
import { UserdetailsComponent } from './home/admin-dashboard/poder/userdetails/userdetails.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    AddtocartComponent,
    CartComponent,
    NavComponent,
    PharmacyComponent,
    NavBarComponent,
    FooterComponent,
    CategoryComponent,
    ShopComponent,
    DrugsComponent,
    SupplierComponent,
    BillingComponent,
    OdersummaryComponent,
    PoderComponent,
    DrugsdetailsComponent,
    SupplierdetailsComponent,
    UserdetailsComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    ReactiveFormsModule,
    CarouselModule,
    
  ],
  exports:[
    CartComponent
  ],
  providers: [
    CartService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
