import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.scss']
})
export class AdminContactComponent implements OnInit {
  list:any=[];
  page:number=1;
  totalLength:any;
  selectlist:any=[];
  public labels:any={   
    previousLabel:'',
    nextLabel:'',

  }
  constructor( private AppService:AppService,private toastr:ToastrService) { }

  ngOnInit(): void {

    this.renderContent();
  }
  sum=0;
 numId:number=0;
  renderContent(){
    return this.AppService.renderContent().subscribe(data =>{
      this.list=data;
    })
  }

  deleteContent(id:number){
    this.toastr.success('Xóa thành công','thông báo')
       console.log(id);
       this.AppService.deleteContent(id).subscribe(data=>{
         this.list=this.list.filter((item:any) =>{
           return item.id !=id;
         })
        //  alert('Xóa thành công');
       })
     }

  parentSelector:boolean=false;
  onChangelist($event:any){
    const listid=$event.target.value;
    const isChecked=$event.target.checked;
    this.list=this.list.filter((d:any)=>{
      if(d.id == listid){
        d.select =isChecked;
        console.log(d)
      }
      if(listid == -1){
        d.select=this.parentSelector;
        return d;
      }
      return d;
    })

  }
  deleteChoose(){
    //list: là danh sach khách hàng;
    this.list=this.list.forEach((e:any,) => {
      if(e.select == true){
        this.selectlist.push(e);
      }
      
    })
    console.log(this.selectlist);
    //this.selectlist: là mảng mới gồm các obj được click checkbox.
    //bên phần Service:
    // deleteContent(id:number){
    //   return this.http.delete(`${this.API_URL}/${id}`)
    // }
    // this.selectlist=this.selectlist.forEach((item:any) =>{
    //   this.AppService.deleteContent(item.id).subscribe((data)=>{
    //     this.list=this.list.filter((e:any) =>{
    //       return e.id !=item.id;
    //     })
    //   })
    
    // })

  }
  clearAll(){
      
  }
  
}



