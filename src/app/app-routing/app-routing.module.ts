import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {MainPageComponent} from '../main-page/main-page.component';
import {HomeComponent} from '../pages/home/home.component';
import {ProdSearchComponent} from '../pages/prod-search/prod-search.component';
import {ProdDetailsComponent} from '../pages/prod-details/prod-details.component';
import {PaymentComponent} from '../pages/payment/payment.component';


const routes: Routes = [
  {path: '', component : LoginComponent},
  {path: 'main', component: MainPageComponent,
    children: [
      { path: 'home', component: HomeComponent},
      { path: 'search', component: ProdSearchComponent},
      { path: 'details', component: ProdDetailsComponent},
      { path: 'payment', component: PaymentComponent},
    ]},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
