import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { OwlOptions,SlidesOutputData } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-product-announ',
  templateUrl: './product-announ.component.html',
  styleUrls: ['./product-announ.component.scss']
})
export class ProductAnnounComponent implements OnInit {  
  public productListcart:any=[];
  public filterCategory : any;
  listProduct:any=[];
  slidesStore: any[]=[];
  
  // listCart={
  //   name:'',
  //   priceold:'',
  //   sale:'',
  //   img:'',

  // };
  totalLength:any;
  page:number=1;
  product:any;
  cartNumber:number =0;
  constructor( private AdminService:AdminService,private Router:Router,private route:ActivatedRoute) {}
  ngOnInit(): void {
    
    this.getProduct();
    
    
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots:false,
    navSpeed: 700,
    navText: [
      '<i class="fa-solid fa-angle-left "></i>',

     '<i class="fa-solid fa-angle-right"></i>',],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 1
        
      }
    },
    nav: true
  }
  getProduct(){
    return this.AdminService.getProduct().subscribe( (data:any)=>{
      this.listProduct= data;
      this.totalLength=data.length;
    })
  }
  // itemCart:any=[]
  addtoCart(item:any){
    
    // let cartDatanull=localStorage.getItem('cart-item');
    // if(cartDatanull ==null){
    //   let storeDataGet:any=[];
    //   storeDataGet.push(item);
    //   localStorage.setItem('cart-item',JSON.stringify(storeDataGet))
    // }else{
    //   var id = item.id;
    //   let index:number=-1;
    //   this.itemCart=JSON.parse(localStorage.getItem('cart-item') || '{}')
    //   for(let i=0 ;i<this.itemCart.length;i++){
    //     if(parseInt(id) ===parseInt(this.itemCart[i].id)){
    //       this.itemCart[i].price= item.price;
    //       index=i;
    //       break;
    //     }
    //   }
    //   if(index == -1){
    //     // this.itemCart.push(item);
    //     localStorage.setItem('cart-item',JSON.stringify(this.itemCart))
    //   }else{localStorage.setItem('cart-item',JSON.stringify(this.itemCart))}
    // }
    this.AdminService.addtoCart(item)
    this.cartNumberFunc();
  }
  cartNumberFunc(){
    var cartValue=JSON.parse(localStorage.getItem('cart-item') || '{}');
    this.cartNumber=cartValue.length;
    this.AdminService.cartSubject.next(this.cartNumber)
  }

}
