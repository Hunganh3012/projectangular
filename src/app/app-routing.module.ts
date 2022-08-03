import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { ContactComponent } from './contact/contact.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundErrorComponent } from './not-found-error/not-found-error.component';
import { ProductComponent } from './product/product.component';
import { NgModel } from '@angular/forms';
import { adminComponent } from './admin/admin.component';
const routes: Routes = [
  {
    path:"",
    redirectTo:'home-page',
    pathMatch:'full'
  },
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
    path:'admin',
    component:adminComponent
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
