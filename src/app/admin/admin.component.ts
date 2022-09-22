import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {Location} from '@angular/common';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class adminComponent implements OnInit {
  // list:any=[];

  constructor(private AppService:AppService ,private toastr:ToastrService,private location:Location) { }
  error(){
    this.toastr.error("Cảnh báo",'thông báo')
  }
  isDisplay=true;
  isDisplay2=true;

  clickToggle(){
    this.isDisplay=!this.isDisplay;
  }
  clickToggle2(){
    this.isDisplay2=!this.isDisplay2;
  }
  backClicked() {
    this.location.back();
  }
  ngOnInit(): void {
    $(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
    });
  }

}
