import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { ProductAnnounComponent } from '../product-announ/product-announ.component';
import { ProductComponent } from '../product/product.component';
import { ContactComponent } from '../contact/contact.component';
import { DetailComponent } from '../detail/detail.component';
import { CartComponent } from '../cart/cart.component';
import { WebComponent } from './web.component';
import { WishlistComponent } from '../admin/wishlist/wishlist.component';
const routes: Routes = [
  {
    path: '',
    component:WebComponent,
    
    children:[
      {
        path:'home-page',
        component:HomePageComponent,
        data: {
          title: 'Home',
          breadcrumb: [
            {
              label: 'Home',
              url: ''
            }
          ]
        },
      },
      {
        path:'contact',
        component:ContactComponent,
        data: {
          title: 'Contact',
          breadcrumb: [
            {
              label: 'Contact',
              url: ''
            }
          ]
        },
      },
      {
        path:'product',
        component:ProductComponent,
        data: {
          title: 'Tin tức',
          breadcrumb: [
            {
              label: 'Tin tức',
              url: ''
            }
          ]
        },
      },
      {
        path:"wishlist",
        component:WishlistComponent
      },
      {
        path:'',
        component:ProductAnnounComponent
      },

      {
        path:'product-announ',
        component:ProductAnnounComponent,
        data: {
          title: 'Sản phẩm ',
          breadcrumb: [
            {
              label: 'Sản phẩm',
              url: ''
            }
          ]
        },
      },

      {
        path:'detail/:id',
        component:DetailComponent,
        data: {
          title: 'Chi tiết sản phẩm ',
          breadcrumb: [
            {
              label: 'Sản phẩm',
              url: '/web/product-announ'
            },
            {
              label: 'Chi tiết sản phẩm',
              url: 'detail/:id'
            }
          ]
        },
      },
      {
        path:'cart',
        component:CartComponent,
        data: {
          title: 'Chi tiết sản phẩm ',
          breadcrumb: [
            {
              label: 'SẢN PHẨM',
              url: '/web/product-announ'
            },
            {
              label: 'Chi tiết sản phẩm',
              url: 'detail/:id'
            },
            {
              label: 'Giỏ hàng',
              url: '/web/cart'
            }
          ]
        },
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
