import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-announ',
  templateUrl: './product-announ.component.html',
  styleUrls: ['./product-announ.component.scss']
})
export class ProductAnnounComponent implements OnInit {
  listProduct:any=[];

  listCart={
    name:'',
    priceold:'',
    sale:'',
    img:'',

  };
  totalLength:any;
  page:number=1;

  constructor( private AdminService:AdminService,
                private Router:Router) { }



  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    return this.AdminService.getProduct().subscribe( (data:any)=>{
      this.listProduct= data;
      this.totalLength=data.length;
    })
  }
  // addtocart(){
  //   this.AdminService.addtocart(this.listCart).subscribe(data =>{
  //     this.AdminService.
  //   })
  // }
}
