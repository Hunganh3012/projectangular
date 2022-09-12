import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-editproduct',
  templateUrl: './admin-editproduct.component.html',
  styleUrls: ['./admin-editproduct.component.scss']
})
export class AdminEditproductComponent implements OnInit {
  edit:any=[];
  constructor(private AdminService:AdminService,
    private route: ActivatedRoute,
    private Router: Router,
    ) { }

  ngOnInit(): void {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
    });
    this.getDetailProduct()
  }
  getDetailProduct(){
    this.route.params.subscribe((data:any)=>{
      this.AdminService.getDetailProduct(data.id).subscribe(data => {this.edit=data})
    })
  }
  updateProduct(){
    this.AdminService.updateProduct(this.edit.id,this.edit).subscribe(data =>{
      this.Router.navigateByUrl('/admin/admin-product')
    })
    alert('Cập nhật thành công')
  }
}
