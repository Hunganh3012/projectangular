import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class adminComponent implements OnInit {
  // list:any=[];

  // constructor(private AppService:AppService) { }

  isDisplay=true;
  isDisplay2=true;


  clickToggle(){
    this.isDisplay=!this.isDisplay;
  }
  clickToggle2(){
    this.isDisplay2=!this.isDisplay2;
  }
  ngOnInit(): void {
    $(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
    });
    // this.renderContent();
  }
  // renderContent(){
  //   return this.AppService.renderContent().subscribe(data =>{
  //     this.list=data;
  //   })
  // }

  // deleteContent(id:number){
  //   console.log(id);
  //   this.AppService.deleteContent(id).subscribe(data=>{
  //     this.list=this.list.filter((item:any) =>{
  //       return item.id !=id;
  //     })
  //     alert('Xóa thành công')
     
      
  //   })
  // }
}
