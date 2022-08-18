import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
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

  
  // addToCart(addedItem:any) {
  //   this.items.push(addedItem)
  //   this.saveCart();
  // }
  // getItems() {
  //   return this.items;
  // }
  // loadCart(): void {
  //   this.items = JSON.parse(localStorage.getItem('cart-item')) ?? [];
  // }
  // saveCart(): void {
  //   localStorage.setItem('cart_items', JSON.stringify(this.items));
  // }
}
