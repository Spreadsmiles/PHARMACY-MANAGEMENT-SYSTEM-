import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { AdminDashboardComponent } from './home/admin-dashboard/admin-dashboard.component';
import { CartComponent } from './home/cart/cart.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './home/nav/nav.component';
import { LoginComponent } from './home/login/login.component';
import { ProfileComponent } from './home/profile/profile.component';
import { RegisterComponent } from './home/register/register.component';
import { UserDashboardComponent } from './home/user-dashboard/user-dashboard.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { ShopComponent } from './pharmacy/shop/shop.component';
import { BillingComponent } from './home/billing/billing.component';
import { OdersummaryComponent } from './home/billing/odersummary/odersummary.component';
import { PoderComponent } from './home/admin-dashboard/poder/poder.component';
import { SupplierdetailsComponent } from './home/admin-dashboard/supplierdetails/supplierdetails.component';
import { DrugsdetailsComponent } from './home/admin-dashboard/drugsdetails/drugsdetails.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'nav', component: NavComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'api/user-auth/user', component: UserDashboardComponent },
  { path: 'api/user-auth/admin', component: AdminDashboardComponent },
  { path: 'addtocart', component: AddtocartComponent },
  { path: 'cart', component: CartComponent },
  {path: 'hi', component: PharmacyComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'billing', component: BillingComponent},
  {path: 'odersummary', component: OdersummaryComponent},
  {path: 'po', component: PoderComponent},
  {path: 'druglist', component: DrugsdetailsComponent},
  {path: 'supplierlist', component: SupplierdetailsComponent},

  { path: '', redirectTo: 'hi', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
