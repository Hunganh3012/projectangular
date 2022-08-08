import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdminContactComponent } from './admin-contact.component';
// import { adminComponent } from '../admin.component';

@NgModule({
  declarations: [AdminContactComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class AdminContactModule { }
