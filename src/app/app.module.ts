import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing/app-routing.module';
import { StoreModule } from '@ngrx/store';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { SearchComponent } from './pages/search/search.component';
import { ProdDetailsComponent } from './pages/prod-details/prod-details.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ProdSearchComponent } from './pages/prod-search/prod-search.component';
import { HomeComponent } from './pages/home/home.component';
import { Observable} from 'rxjs/Observable';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
//import { reducers, metaReducers } from './reducers';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    MainPageComponent,
    ShopCartComponent,
    SearchComponent,
    ProdDetailsComponent,
    PaymentComponent,
    ProdSearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    /*StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    })*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
