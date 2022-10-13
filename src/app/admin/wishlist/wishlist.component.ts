import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  constructor(private AdminService:AdminService) {}

  ngOnInit(): void {
    this.getwlistDetail();
  }
  wListDetail:any=[];
  getwlistDetail(){
  if(localStorage.getItem('wlist-item')){
    this.wListDetail=JSON.parse(localStorage.getItem('wlist-item') || '{}');
    console.log( this.wListDetail)
  }
  }
  clearwlist(item:any){
    this.AdminService.clearwlist(this.wListDetail)
  }
  removeFromwList(item:any) {
    this.AdminService.removewlist(item);
    this.wListDetail = this.AdminService.getwlist();
  }
}
