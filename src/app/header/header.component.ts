import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isDisplay=false;
  clickToggle(){
    this.isDisplay=!this.isDisplay;
  }
}
// const toggle:any= document.querySelector(".header-menu-bars");
// const headerMenu:any=document.querySelector(".header-toggle");
// const isToggle=document.querySelector(".is-toggle")
// toggle.addEventListener("click",function(e:any){
//     headerMenu.classList.toggle("is-toggle");
//     // headerMenu.classList.toggle("is-toggle");
// })