import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  list:any={
    lastname:'',
    firstname:'',
    phone:'',
    email:'',
    content:'',
    time: Date.now(),
  }
  

  constructor( private AppService:AppService,
              private router:Router) { }

  ngOnInit(): void {
  }
  postContent(){
    let myDate=Date.now()
     this.AppService.postContent(this.list).subscribe(data=>{
      alert('Gửi thành công');
      this.router.navigateByUrl('/contact')
     })
  }
}
