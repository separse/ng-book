import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './tarck-task/about.component';
import { ContractComponent } from './tarck-task/contract.component';
import { HomeComponent } from './tarck-task/home.component';
import { LoggedInGuard } from './tarck-task/logged-in.gaurd';
import { LoginComponent } from './tarck-task/login/login.component';
import { ProductComponent } from './tarck-task/product/product.component';
import { ProductsComponent } from './tarck-task/products/products.component';
import { ProtectedComponent } from './tarck-task/protected.component';

const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contract', component: ContractComponent },
  { path: 'contactus', redirectTo: 'contact' },
  // authentication demo
  { path: 'login', component: LoginComponent },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'products/:id',
    component: ProductComponent,
  },
  // nested
  {
    path: 'products',
    component: ProductsComponent,
    // children: childRoutes,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
