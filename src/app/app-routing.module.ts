import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { ContactComponent } from './contact/contact.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundErrorComponent } from './not-found-error/not-found-error.component';
import { ProductComponent } from './product/product.component';

import { ProductAnnounComponent } from './product-announ/product-announ.component';
import { AuthGuard } from './auth.guard';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';

import { WishlistComponent } from './admin/wishlist/wishlist.component';
import { Chain } from '@angular/compiler';
import { WebComponent } from './web/web.component';
const routes: Routes = [
  {
    path:'web',
    // component:WebComponent
    loadChildren: ()=> import('./web/web.module').then((m) => m.WebModule)
  },


  {
    path:'admin',
    loadChildren : ()=> import('./admin/admin.module').then((m)=> m.AdminModule),
    canActivate:[AuthGuard]
    
  },
  {
    path:"",
    redirectTo:'/web/product-announ',
    pathMatch:'full'
  },
  {
    path:'**',
    component:NotFoundErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
