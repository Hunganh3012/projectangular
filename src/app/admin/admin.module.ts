import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminAddproductComponent } from './admin-addproduct/admin-addproduct.component';
import { FormsModule } from '@angular/forms';
import { AdminEditproductComponent } from './admin-editproduct/admin-editproduct.component';
import { AdminProductHighlightComponent } from './admin-product-highlight/admin-product-highlight.component';
import { WishlistComponent } from './wishlist/wishlist.component';
// import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AdminContactComponent,
    AdminProductComponent,
    AdminAddproductComponent,
    AdminEditproductComponent,
    AdminProductHighlightComponent,
    // WishlistComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    // NgxPaginationModule
    // HttpClient
  ]
})
export class AdminModule { }
