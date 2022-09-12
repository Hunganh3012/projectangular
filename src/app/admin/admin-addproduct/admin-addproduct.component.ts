import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-admin-addproduct',
  templateUrl: './admin-addproduct.component.html',
  styleUrls: ['./admin-addproduct.component.scss']
})
export class AdminAddproductComponent implements OnInit {
  listadd:any={
    name:'',
    sale:'',
    priceold:'',
    detail:'',
    img:''
  }
  constructor( private AdminService:AdminService, private Router:Router) { }

  ngOnInit(): void {
    $(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
    });
  }
  addProduct(){
    this.AdminService.addProduct(this.listadd).subscribe(data =>{
      alert("Thêm sản phẩm thành công");
      this.Router.navigateByUrl('/admin/admin-product')
    })
  }
}
