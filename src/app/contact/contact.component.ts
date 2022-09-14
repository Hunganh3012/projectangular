import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor( private AppService:AppService,
              private router:Router) { }

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
     this.AppService.postContent(this.list).subscribe(data=>{

      alert('Gửi thành công');
      this.router.navigateByUrl('/')
     })
  }
}
