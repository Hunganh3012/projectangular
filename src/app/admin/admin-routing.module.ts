import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminAddproductComponent } from './admin-addproduct/admin-addproduct.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AdminEditproductComponent } from './admin-editproduct/admin-editproduct.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminOptionComponent } from './admin-option/admin-option.component';
import { adminComponent } from './admin.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { DasboardComponent } from './dasboard/dasboard.component';

import { SidebarComponent } from './sidebar/sidebar.component';

const Adminroutes: Routes = [
    {
      path:'',
      component:adminComponent,
      children:[
        {
          path:'admin-contact',
          component:AdminContactComponent
        },
        {
          path:'',
          component:DasboardComponent
        },
        {
          path:'dasboard',
          component:DasboardComponent
        },
        {
          path:'admin-product',
          component:AdminProductComponent
        },
        {
          path:'admin-addproduct',
          component:AdminAddproductComponent
        },
        {
          path:'admin-editproduct/:id',
          component:AdminEditproductComponent
        },
        {
          path:'sidebar',
          component:SidebarComponent
        }
      ]
    },

];

@NgModule({
  imports: [RouterModule.forChild(Adminroutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
