import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart:any=[];
  constructor(private adminService:AdminService, private route:ActivatedRoute,private Router:Router) { }

  ngOnInit(): void {

  }

  successbuy(){
    this.Router.navigateByUrl("/");
    alert('Mua hàng thành công')
  }
}
