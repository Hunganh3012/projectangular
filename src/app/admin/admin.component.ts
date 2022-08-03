import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class adminComponent implements OnInit {
  list:any=[];

  constructor( private AppService:AppService,) { }

  ngOnInit(): void {
    this.renderContent();
  }
  renderContent(){
    return this.AppService.renderContent().subscribe(data =>{
      this.list=data;
    })
  }
}
