import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AdminService } from '../admin/admin.service';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isShow=false;
  isShowLogIn=true;
  isShowLogOut=false;
  isShowClose=true;
  constructor(private authService:AuthService, private adminService:AdminService,
    private ngDynamicBreadcrumbService: NgDynamicBreadcrumbService) { 
    this.adminService.cartSubject.subscribe(data =>{
      this.totalItem=data;
      
    })
    this.adminService.productmini.subscribe(data =>{
      this.CartDetailheader=data;
    })
  }
  public qtyCart:any;
  public totalItem:number=0;
  numberProduct:any=[];
  productCart:any=[];
  CartDetailheader:any=[];
  ngOnInit(): void {  
    const breadcrumb =  {customText: 'This is Custom Text', dynamicText: 'Level 2 '};
    this.ngDynamicBreadcrumbService.updateBreadcrumbLabels(breadcrumb);
  
    this.adminService.loadCart();
    this.cartDetail();

    this.adminService.getProduct().subscribe((res:any)=>{
      this.numberProduct.push(res);
      this.cartItemFunc();
    })

    this.adminService.getProduct().subscribe((res :any)=>{
      this.productCart.push(res); 
      this.productItemFunc();
    })
  }
  get Totals(){
    return this.CartDetailheader.reduce((sum:any,x:any) =>({
      qtyTotal: 1,
      priceold:sum.priceold +x.qtyTotal * x.priceold
    }),
    {qtyTotal:1, priceold:0}
    ).priceold;
  }
  cartItemFunc(){
    this.totalItem= this.getCartItemFromLocal().length ?? 0;
  }
  productItemFunc(){
    this.CartDetailheader=this.getProductItemFromLocal();
  }
  // qtyCarts(){
  //   this
  // }

  getCartItemFromLocal(): any {
    const data = localStorage.getItem('cart-item');
    console.log(data);
    if (!data) return;
    return  JSON.parse(data)
  }
  getProductItemFromLocal():any {
    const data=localStorage.getItem('cart-item');
    if(!data)  return;
    return JSON.parse(data);
  }
  get Total(){
    return this.getCartDetail.reduce((sum:any,x:any) =>({
      qtyTotal: 1,
      priceold:sum.priceold +x.qtyTotal * x.priceold
    }),
    {qtyTotal:1, priceold:0}
    ).priceold;
  }
  get totalItems():number {
    return this.getCartItemFromLocal.length;
  }
  get productItems():any {
    return this.getProductItemFromLocal;
  }
  getCartDetail:any=[];
  cartDetail(){
    if(localStorage.getItem('cart-item')){
      this.getCartDetail=JSON.parse(localStorage.getItem('cart-item') || '{}') ;
    }
  }











  // -----------------------Log In & Log Out--------------------------
  isDisplay=true;
  clickToggle(){
    this.isDisplay=!this.isDisplay;
  }

  logIn(){
    this.authService.logIn();
    this.isShow=true;
    this.isShowLogIn=false;
    this.isShowLogOut=true;
  }
  signIn(){
    
  }
  logOut(){
    this.authService.logOut();
    this.isShowLogOut=false;
    this.isShowLogIn=true;
    this.isShow=false;
  }
  close(){
    this.authService.close();
    this.isShowClose=false;
  } 
  open(){
    this.authService.open();
    this.isShowClose=true;
  } 
}



