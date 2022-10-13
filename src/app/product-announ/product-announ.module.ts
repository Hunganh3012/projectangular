import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductAnnounComponent } from './product-announ.component';


@NgModule({
  declarations: [ProductAnnounComponent],
  imports: [
    CommonModule,
    // CarouselModule,
    BrowserAnimationsModule
  ]
})
export class ProductAnnounModule { }
