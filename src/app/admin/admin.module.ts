import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminAddproductComponent } from './admin-addproduct/admin-addproduct.component';
import { FormsModule } from '@angular/forms';
import { AdminEditproductComponent } from './admin-editproduct/admin-editproduct.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AdminOptionComponent } from './admin-option/admin-option.component';
import { NgxPaginationModule } from 'ngx-pagination';
import * as $ from 'jquery';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AdminContactComponent,
    AdminProductComponent,
    AdminAddproductComponent,
    AdminEditproductComponent,
    AdminOptionComponent,
    SidebarComponent,
    // WishlistComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgxPaginationModule
    // HttpClient
  ]
})
export class AdminModule { }
