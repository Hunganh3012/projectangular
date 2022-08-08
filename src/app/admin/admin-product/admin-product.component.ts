import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {
  listproductAdmin:any=[];
  constructor( private AdminService:AdminService) { }

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
      alert('Xóa sản phẩm thành công')
    })
  }
}
