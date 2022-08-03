import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  constructor(private http:HttpClient) { }
  API_URL=" https://62de1ee1ccdf9f7ec2d15d4e.mockapi.io/user "
  renderContent(){
    return this.http.get(`${this.API_URL}`);
  }
  postContent(data:any){
    return this.http.post(this.API_URL,data)
  }
}
