import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin/admin.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  cartNumber:number =0;
  detail:any=[];
  constructor(private AdminService:AdminService, private route:ActivatedRoute,private Router:Router, ) { }

  ngOnInit(): void {
    this.productDetail();
  }
  addtocart(item:any){
    item.qtyTotal=1;
    if(!this.AdminService.itemInCart(item)){
      this.AdminService.addtoCart(item)
      this.cartNumberFunc();
    }
  }
  cartNumberFunc(){
    var cartValue=JSON.parse(localStorage.getItem('cart-item') || '{}');
    this.cartNumber=cartValue.length;
    this.AdminService.cartSubject.next(this.cartNumber)
  }
  productDetail(){
    this.route.params.subscribe((data:any)=>{
      this.AdminService.porductdetail(data.id).subscribe(data =>{
        this.detail=data;
        console.log(this.detail);
       
      })
    })
  }
  
}
