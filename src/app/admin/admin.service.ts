import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  items = [];
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


  
  getCart(){
    this.API_Product;
  }
  // getProductCart(){
  //   return this.http.get<any>(this.API_Product)
  //   .pipe(map((res:any)=> {
  //     return res;
  //   }))
  // }
public cartItemList:any=[];
public productList=new BehaviorSubject<any>([]);
getProductCart(){
  return this.productList.asObservable();
}
setProductCart( product : any){
  this.productList.next(product)
  this.cartItemList.push(...product);
}
addtoCart(product:any){
  this.cartItemList.push(product);
  this.productList.next(this.cartItemList);
  this.getTotalPrice();
  console.log(this.cartItemList)
}
getTotalPrice(){
 let grandTotal=0;
 this.cartItemList.map((a:any)=>{
  grandTotal+= a.priceold;
 }) 
 return grandTotal;
}
removeCartItem(product:any){
  this.cartItemList.map((a:any,index:any)=>{
    if(product.id === a.id){
      this.cartItemList.splice(index,1);
    }
  })
  this.productList.next(this.cartItemList);
}
removeAllCart(){
  this.cartItemList=[];
  this.productList.next(this.cartItemList);
}

}

