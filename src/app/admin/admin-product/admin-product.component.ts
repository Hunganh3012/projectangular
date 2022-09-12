import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { OwlOptions,SlidesOutputData } from 'ngx-owl-carousel-o';
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
  constructor( private AdminService:AdminService) { }
  ngOnInit(): void {
    this.getProduct();
    $(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
    });
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
      alert('Xóa sản phẩm thành công')
    })
  }
}
