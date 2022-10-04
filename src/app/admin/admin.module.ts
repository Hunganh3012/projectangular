import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminAddproductComponent } from './admin-addproduct/admin-addproduct.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { FormsModule } from '@angular/forms';
import { AdminEditproductComponent } from './admin-editproduct/admin-editproduct.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AdminOptionComponent } from './admin-option/admin-option.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DasboardComponent } from './dasboard/dasboard.component';
import { HeadComponent } from '../head/head.component';
import { FileUploadModule } from "ng2-file-upload"; 
import {CloudinaryModule} from '@cloudinary/ng';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import { AdminNewsComponent } from './admin-news/admin-news.component';
import { AdminAddnewsComponent } from './admin-addnews/admin-addnews.component';

// import { NgxPaginationModule } from 'ngx-pagination';
export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'left',
  allowNegative: false,
  decimal: ',',
  precision: 3,
  prefix: '',
  suffix:'',
  thousands: '.',
};
@NgModule({
  declarations: [
    AdminContactComponent,
    AdminProductComponent,
    AdminAddproductComponent,
    AdminEditproductComponent,
    AdminOptionComponent,
    SidebarComponent,
    DasboardComponent,
    AdminNewsComponent,
    AdminAddnewsComponent,
    
    // HeadComponent
    // WishlistComponent,
  ],
  imports: [
    CommonModule,
    FileUploadModule,
    CloudinaryModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxDropzoneModule,
    CurrencyMaskModule
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ]
})
export class AdminModule { }
