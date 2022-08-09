import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isShow=false;
  isShowLogIn=true;
  isShowLogOut=false;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  isDisplay=false;
  clickToggle(){
    this.isDisplay=!this.isDisplay;
  }

  logIn(){
    this.authService.logIn();
    this.isShow=true;
    this.isShowLogIn=false;
    this.isShowLogOut=true;
  }
  logOut(){
    this.authService.logOut();
    this.isShowLogOut=false;
    this.isShowLogIn=true;
    this.isShow=false;
  }
}
// const toggle:any= document.querySelector(".header-menu-bars");
// const headerMenu:any=document.querySelector(".header-toggle");
// const isToggle=document.querySelector(".is-toggle")
// toggle.addEventListener("click",function(e:any){
//     headerMenu.classList.toggle("is-toggle");
//     // headerMenu.classList.toggle("is-toggle");
// })