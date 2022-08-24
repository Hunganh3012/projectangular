import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map} from 'rxjs';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  items:any= [];
  listProduct:any=[];
  constructor(private http:HttpClient) { }
  API_Product="https://62de1ee1ccdf9f7ec2d15d4e.mockapi.io/product";
// API_Cart ="http://localhost:3000/cart" 
  getProduct(){
    return this.http.get(`${this.API_Product}`)
  }
  addProduct(data:any){
    return this.http.post(this.API_Product,data)
  }
  deleteProduct(id:number){
    return this.http.delete(`${this.API_Product}/${id}`)
  }
  getDetailProduct(id:number){
    return this.http.get(`${this.API_Product}/${id}`)
  }
  updateProduct(id:number, data:any){
    return this.http.put(`${this.API_Product}/${id}`,data)
  }
  porductdetail(id:number){
    return this.http.get(`${this.API_Product}/${id}`)
  }
  hideSubject=new Subject<any>();
  OpenLoginService=new Subject<any>();
  cartSubject=new Subject<any>()
//Ban đầu
  


  // getProductCart(){
  //   return this.http.get<any>(this.API_Product)
  //   .pipe(map((res:any)=> {
  //     return res;
  //   }))
  // }

//----------------------------Sản phẩm yêu thích--------------------------
    public wlistItem:any=[]
    addtowishlist(wlist:any){
      this.wlistItem.push(wlist);
      console.log(wlist);
      localStorage.setItem('wlist-item',JSON.stringify(this.wlistItem));
    }
    itemInWlist(item:any):boolean{
      return this.wlistItem.findIndex((o:any)=>o.id === item.id) >-1;
    }
    getwlist(){
      return this.wlistItem;
    }
    savewlist():void{
        localStorage.setItem('wlist-item', JSON.stringify(this.wlistItem)); 
    }
    clearwlist(items:any){
      this.wlistItem=[];
      localStorage.removeItem("wlist-item");
    }
    removewlist(item:any){
      const index = this.wlistItem.findIndex((o:any) => o.id === item.id);
  
      if (index > -1) {
        this.wlistItem.splice(index, 1);
        this.savewlist();
      }
    }
// ---------------------------Giỏ hàng---------------------------------------

    public cartItemList:any=[];
    public totalItem:any;

    productNumber:any;

    
    loadCart(): void {
      this.items = JSON.parse(localStorage.getItem("cart-item") || '{}') ?? [];
    }
    addtoCart(product:any){

      // this.cartItemList.push(product);
      // localStorage.setItem('cart-item',JSON.stringify(product))
      console.log(product);
      let cartDataNull=localStorage.getItem('cart-item');
      if(cartDataNull ==null){
        let storeDataGet:any=[];
        storeDataGet.push(product)
        localStorage.setItem('cart-item',JSON.stringify(storeDataGet));
      }
      else{
        var id=product.id;
        let index:number=-1;
        this. cartItemList=JSON.parse(localStorage.getItem('cart-item') || '{}');
        for(let i=0;i<this. cartItemList.length;i++){  
          if(parseInt(id) === parseInt(this. cartItemList[i].id)){
            index=i;
            break;
          }
        }
        if(index == -1){
          this. cartItemList.push(product);
          localStorage.setItem('cart-item',JSON.stringify(this. cartItemList))
        console.log(this. cartItemList)

        }
        else{
          localStorage.setItem('cart-item',JSON.stringify(this. cartItemList))
        }
      }
      
      
    }
    getItem(){
      return this.cartItemList;
    }
    saveCart(): void {
      localStorage.setItem('cart-item', JSON.stringify(this.cartItemList)); 
    }
    clearCart(items:any){
      this.cartItemList=[];
      localStorage.removeItem("cart-item");
    }
    // removeItem(item:any) {
    //   const index = this.cartItemList.findIndex((o:any) => o.id === item.id);
  
    //   if (index > -1) {
    //     this.cartItemList.splice(index, 1);
    //     this.saveCart();
    //   }
    // }
    removeItem(item:any){
      if(localStorage.getItem('cart-item')){
        this.cartItemList=JSON.parse(localStorage.getItem('cart-item') || '{}')

        for(let i=0;i<this.cartItemList.length;i++){
          if(this.cartItemList[i].id === item){ 
            this.cartItemList.splice(i,1);
            console.log(this.cartItemList)
            this.saveCart();
          }
        }
      }
    }
    itemInCart(item:any):boolean{
      return this.cartItemList.findIndex((o:any) => o.id === item.id) > -1;
    }
    
}

