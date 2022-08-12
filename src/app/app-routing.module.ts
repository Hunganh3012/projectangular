import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { ContactComponent } from './contact/contact.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundErrorComponent } from './not-found-error/not-found-error.component';
import { ProductComponent } from './product/product.component';
import { adminComponent } from './admin/admin.component';
import { ProductAnnounComponent } from './product-announ/product-announ.component';
import { AuthGuard } from './auth.guard';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
  
  {
    path:'home-page',
    component:HomePageComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:"",
    redirectTo:'product-announ',
    pathMatch:'full'
  },
  {
    path:'product-announ',
    component:ProductAnnounComponent
  },
  {
    path:'detail/:id',
    component:DetailComponent
  },
  {
    path:'cart/:id',
    component:CartComponent
  },
  {
    path:'admin',
    loadChildren : ()=> import('./admin/admin.module').then((m)=> m.AdminModule),
    canActivate:[AuthGuard]
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
