import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
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
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ProductComponent,
    HomePageComponent,
    TieudiemComponent,
    NotFoundErrorComponent,
    adminComponent,
    ProductAnnounComponent,
    HeadComponent,
    DetailComponent,
    CartComponent,
    WishlistComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    CarouselModule,
    BrowserAnimationsModule,


  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [CurrencyPipe,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
