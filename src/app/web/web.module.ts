import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactComponent } from '../contact/contact.component';
import { ProductComponent } from '../product/product.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { TieudiemComponent } from '../tieudiem/tieudiem.component';
import { NotFoundErrorComponent } from '../not-found-error/not-found-error.component';
import { adminComponent } from '../admin/admin.component';
import { ProductAnnounComponent } from '../product-announ/product-announ.component';
import { HeadComponent } from '../head/head.component';
import { DetailComponent } from '../detail/detail.component';
import { CartComponent } from '../cart/cart.component';
import {NgDynamicBreadcrumbModule} from "ng-dynamic-breadcrumb";
import { CurrencyPipe } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    WebComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ProductComponent,
    HomePageComponent,
    TieudiemComponent,
    NotFoundErrorComponent,
    // adminComponent,
    ProductAnnounComponent,
    HeadComponent,
    DetailComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    FormsModule,
    NgxPaginationModule,
    CarouselModule,
    ReactiveFormsModule,
    NgDynamicBreadcrumbModule
  ],
  providers: [CurrencyPipe,],
})
export class WebModule { }
