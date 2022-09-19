import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../app.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  submitted=false;
  form!: FormGroup; 
  constructor( private AppService:AppService,
              private router:Router,
              private toastr:ToastrService,

              ) { }

  ngOnInit(): void {
    // this.form = this.fb.group(
    //   {
    //     lastname: ['', [Validators.required,Validators.minLength(2)]],
    //     firstname: ['',[Validators.required,Validators.minLength(2),]],
    //     priceold: ['', [Validators.required,Validators.pattern("[0-9 ]{2,10}")]],
    //     sale: ['', [Validators.required, Validators.pattern("[0-9 ]{1,2}")]],
    //     detail: ['', [Validators.required, Validators.minLength(6),]],
    //     acceptTerms: [false, Validators.requiredTrue]
    //   },
    // );
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
  OnSubmit(){
    this.submitted=true

  }
}
