import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TieudiemComponent } from './tieudiem/tieudiem.component';
import { NotFoundErrorComponent } from './not-found-error/not-found-error.component';
import { adminComponent } from './admin/admin.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrencyPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductAnnounComponent } from './product-announ/product-announ.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeadComponent } from './head/head.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WishlistComponent } from './admin/wishlist/wishlist.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxCurrencyModule } from "ngx-currency";
import { CurrencyMaskModule } from 'ng2-currency-mask';
import {NgDynamicBreadcrumbModule} from "ng-dynamic-breadcrumb";
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { QuenmatkhauComponent } from './quenmatkhau/quenmatkhau.component';


@NgModule({
  declarations: [
    AppComponent,
    adminComponent,
    WishlistComponent,
    DangnhapComponent,
    DangkyComponent,
    QuenmatkhauComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    CarouselModule,
    BrowserAnimationsModule,  
    NgxCurrencyModule,
    NgDynamicBreadcrumbModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    ToastrModule.forRoot(
      {
        timeOut: 1000,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
        progressBar:true,
        progressAnimation:'increasing',
      }
    ),



  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
