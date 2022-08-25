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
  listProductHighlight:any=[];
  slidesStore: any[]=[];
  
  // listCart={
  //   name:'',
  //   priceold:'',
  //   sale:'',
  //   img:'',

  // };
  getFourProduct:any=[];
  totalLength:any;
  page:number=1;
  product:any;
  cartNumber:number =0;
  productcart:any=[];
  constructor( private AdminService:AdminService,private Router:Router,private route:ActivatedRoute) {}
  ngOnInit(): void {
    
    this.getProduct();
    this.getProductHighlight();
    
    
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
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
        
      }
    },
    nav: true
  }


  addtowlist(item:any){
      this.AdminService.addtowishlist(item);
  alert('Đã thêm vào mục sản phẩm yêu thích');


  }
  getProduct(){
    return this.AdminService.getProduct().subscribe( (data:any)=>{
      this.listProduct= data;
      this.totalLength=data.length;
      console.log(this.listProduct)
    })
  }
  getProductHighlight(){
    return this.AdminService.getProduct().subscribe( (data:any)=>{
      console.log(data.splice(5,9))
      this.listProductHighlight= data.splice(5,4);


    })
  }
  // itemCart:any=[]
  addtoCart(product:any){
      // console.log(item);
      // localStorage.setItem('cart-item',JSON.stringify(item))
      this.AdminService.addtoCart(product);
      this.cartNumberFunc();
      this.productNumberFunc();
  }

  cartNumberFunc(){
    var cartValue=JSON.parse(localStorage.getItem('cart-item') || '{}');
    this.cartNumber=cartValue.length;
    this.AdminService.cartSubject.next(this.cartNumber);
  }
  productNumberFunc(){
    var productValue=JSON.parse(localStorage.getItem('cart-item') || '{}');
    this.productcart=productValue;
    this.AdminService.productmini.next(this.productcart);

  }
}
