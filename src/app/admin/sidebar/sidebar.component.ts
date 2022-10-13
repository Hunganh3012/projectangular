import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isDisplay=true;
  isDisplay2=true;
  constructor() { }

  ngOnInit(): void {
  }

  clickToggle(){
    this.isDisplay=!this.isDisplay;
  }
  clickToggle2(){
    this.isDisplay2=!this.isDisplay2;
  }
}
