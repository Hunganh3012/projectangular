import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';
import { ActivatedRoute,Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ViewChildren, ElementRef, QueryList  } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @ViewChildren('subTotalWrap')  subTotalItems!:QueryList<ElementRef>;
  @ViewChildren('subTotalWrap_existing')  subTotalItems_existing!: QueryList<ElementRef>;

  cart:any=[];
  constructor(
    private adminService:AdminService, 
    private route:ActivatedRoute,
    private Router:Router,
    private currencyPipe: CurrencyPipe // private builder: FormBuilder
    ) { }
  public totalItem:number=0;
  ngOnInit(): void {
    this.adminService.loadCart();
      this.cartDetail();
  }

  getCartDetail:any=[];
  cartDetail(){
    if(localStorage.getItem('cart-item')){
      this.getCartDetail=JSON.parse(localStorage.getItem('cart-item') || '{}') ;
      console.log(this.getCartDetail);
    }
  }
  
  
  successbuy(){
    this.adminService.clearCart(this.getCartDetail);
    this.Router.navigateByUrl("/");
    alert('Mua hàng thành công')
  }
  clearCart(item:any){
    this.adminService.clearCart(this.getCartDetail);
  }
  removeFromCart(item:any) {
    this.adminService.removeItem(item);
    this.getCartDetail = this.adminService.getItem();
  }
  get Total(){
    return this.getCartDetail.reduce((sum:any,x:any) =>({
      qtyTotal: 1,
      priceold:sum.priceold +x.qtyTotal * x.priceold
    }),
    {qtyTotal:1, priceold:0}
    ).priceold;
  }
  changeSubtotal(item:any, index:any) {
    const qty = item.qtyTotal;
    const amt = item.priceold;
    const subTotal = amt * qty;
    const subTotal_converted = this.currencyPipe.transform(subTotal,"VND",'symbol','1.2-3');
    this.subTotalItems.toArray()[index].nativeElement.innerHTML =subTotal_converted;
    this.adminService.saveCart();
  }
}
