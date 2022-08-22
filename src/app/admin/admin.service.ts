import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map} from 'rxjs';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  items = [];
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

// ---------------------------Giỏ hàng---------------------------------------

    public cartItemList:any=[];
    
    public totalItem:any;
    productNumber:any;

    
    
    addtoCart(product:any){
      this.cartItemList.push(product);
      console.log(product);
      localStorage.setItem('cart-item',JSON.stringify(this.cartItemList));
    }
    getItem(){
      return this.cartItemList;
    }
    saveCart(): void {
      localStorage.setItem('cart_item', JSON.stringify(this.items)); 
    }
    // setItem(product:any){
    //   product.price=1;
    //   let cartItem={
    //     [ product.name]:product
    //   }
    //   localStorage.setItem("cart-item",JSON.stringify(cartItem))
    // }
    clearCart(items:any){
      this.cartItemList=[];
      localStorage.removeItem("cart-item");
    }
    removeItem(item:any) {
      const index = this.cartItemList.findIndex((o:any) => o.id === item.id);
  
      if (index > -1) {
        this.cartItemList.splice(index, 1);
        this.saveCart();
      }
    }
    
}

