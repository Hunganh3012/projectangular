import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { ProductAnnounComponent } from '../product-announ/product-announ.component';
import { ProductComponent } from '../product/product.component';
import { ContactComponent } from '../contact/contact.component';
import { DetailComponent } from '../detail/detail.component';
import { CartComponent } from '../cart/cart.component';
import { WebComponent } from './web.component';
const routes: Routes = [
  {
    path: '',
    component:WebComponent,
    children:[
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
        path:'',
        component:ProductAnnounComponent
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
        path:'cart',
        component:CartComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
