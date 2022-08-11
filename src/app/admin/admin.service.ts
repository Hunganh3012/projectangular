import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  API_Product="http://localhost:3000/products";
API_Cart="http://localhost:3000/cart"
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
  getProductCart(id:number){
    return this.http.get(`${this.API_Product}/${id}`)
  }
  // addtocart(data:any){
  //   return this.http.post(`${this.API_Cart,data);
  // }
}
