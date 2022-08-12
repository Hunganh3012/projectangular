import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  items = [];
  constructor(private http:HttpClient) { }
  API_Product="http://localhost:3000/products";
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
  getProductCart(id:number){
    return this.http.get(`${this.API_Product}/${id}`)
  }
  
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
