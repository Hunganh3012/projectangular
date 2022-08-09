import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product-announ',
  templateUrl: './product-announ.component.html',
  styleUrls: ['./product-announ.component.scss']
})
export class ProductAnnounComponent implements OnInit {
  listProduct:any=[];


  totalLength:any;
  page:number=1;

  constructor( private AdminService:AdminService) { }



  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    return this.AdminService.getProduct().subscribe( (data:any)=>{
      this.listProduct= data;
      this.totalLength=data.length;
    })
  }
}
