import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AdminService } from '../admin/admin.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isShow=false;
  isShowLogIn=true;
  isShowLogOut=false;
  constructor(private authService:AuthService, private adminService:AdminService) { 
    this.adminService.cartSubject.subscribe(data =>{
      this.totalItem=data;
    })
    this.adminService.productmini.subscribe(data =>{
      this.getCartDetailheader=data;
    })
  }
  public totalItem:number=0;
  numberProduct:any=[];
  productCart:any=[];
  getCartDetailheader:any=[];
  ngOnInit(): void {  
    this.adminService.getProduct().subscribe((res:any)=>{
      this.numberProduct.push(res);
      this.cartItemFunc();
    })
    this.adminService.getProduct().subscribe((res :any)=>{
      this.productCart.push(res)
      this.productItemFunc();
    })
   
    // console.log(this.numberProduct)
  }
  cartItemFunc(){
    this.totalItem= this.getCartItemFromLocal().length ?? 0;
  }
  productItemFunc(){
    this.getCartDetailheader=this.getProductItemFromLocal();
  }

  getCartItemFromLocal(): any {
    const data = localStorage.getItem('cart-item');
    if (!data) return;
    return  JSON.parse(data)
  }
  getProductItemFromLocal():any {
    const data=localStorage.getItem('cart-item');
    if(!data)  return;
    return JSON.parse(data);
  }

  get totalItems():number {
    return this.getCartItemFromLocal.length;
  }
  get productItems():any {
    return this.getProductItemFromLocal;
  }


  // cartDetailHeader(){
  //   if(localStorage.getItem('cart-item')){
  //     this.getCartDetailheader=JSON.parse(localStorage.getItem('cart-item') || '{}') ;
  //     // console.log(this.getCartDetailheader);
  //   }
  // }








  // -----------------------Log In & Log Out--------------------------
  isDisplay=false;
  clickToggle(){
    this.isDisplay=!this.isDisplay;
  }

  logIn(){
    this.authService.logIn();
    this.isShow=true;
    this.isShowLogIn=false;
    this.isShowLogOut=true;
  }
  logOut(){
    this.authService.logOut();
    this.isShowLogOut=false;
    this.isShowLogIn=true;
    this.isShow=false;
  }
}
