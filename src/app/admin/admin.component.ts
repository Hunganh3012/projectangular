import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class adminComponent implements OnInit {
  // list:any=[];

  // constructor(private AppService:AppService) { }

  ngOnInit(): void {
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
