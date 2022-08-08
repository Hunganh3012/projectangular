import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.scss']
})
export class AdminContactComponent implements OnInit {
  list:any=[];
  constructor( private AppService:AppService) { }

  ngOnInit(): void {
    this.renderContent();
  }

  renderContent(){
    return this.AppService.renderContent().subscribe(data =>{
      this.list=data;
    })
  }

  deleteContent(id:number){
       console.log(id);
       this.AppService.deleteContent(id).subscribe(data=>{
         this.list=this.list.filter((item:any) =>{
           return item.id !=id;
         })
         alert('Xóa thành công')
       })
     }
}
