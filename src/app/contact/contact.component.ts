import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../app.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor( private AppService:AppService,
              private router:Router,
              private toastr:ToastrService) { }

  ngOnInit(): void {
    
  }
  list:any={
    lastname:'',
    firstname:'',
    phone:'',
    email:'',
    content:'',
    time:''
  }
  postContent(){
    var today=new Date();
    var time = today.getHours() + ":" + today.getMinutes() +":"+ today.getSeconds();
    var date=  today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    var timedate=time +" "+ date;
    this.list.time=timedate;
    console.log(timedate);
    this.toastr.success('Sửa thành công','thông báo');
     this.AppService.postContent(this.list).subscribe(data=>{

      this.router.navigateByUrl('/')
     })
  }
}
