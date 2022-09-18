import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { OwlOptions,SlidesOutputData } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {
  listproductAdmin:any=[];
  totalLength:any;
  page:number=1;
  public labels:any={   
    previousLabel:'',
    nextLabel:'',

  }
  constructor( private AdminService:AdminService, private toastr:ToastrService) { }
  ngOnInit(): void {
    this.getProduct();

  }
  getProduct(){
    return this.AdminService.getProduct().subscribe((data:any)=>{
      this.listproductAdmin=data;
    })

  }
  deleteProduct(id:number){
    return this.AdminService.deleteProduct(id).subscribe(data=>{
      this.listproductAdmin=this.listproductAdmin.filter((item:any) =>{
          return item.id !=id;
      })
      this.toastr.success('Xóa thành công','thông báo');    })
  }
}
