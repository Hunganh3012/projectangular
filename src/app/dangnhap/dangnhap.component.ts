import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.scss']
})
export class DangnhapComponent implements OnInit {
  form!: FormGroup; 
  submitted = false;
  constructor( private location:Location, private formBuilder:FormBuilder, private Router:Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required,Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
       
      }
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  backClicked() {
    this.location.back();
  }
  OnSubmit(){
    this.submitted = true;
    if(this.form.invalid){
      return
    }else{
      this.Router.navigateByUrl('/web/product-announ')
    }
  }
  onclickgg(){
    Swal.fire({
      title: 'Xin lỗi bất tiện này',
      text: "Tính năng chưa phát triển",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText:'Quay lại',
      confirmButtonText: 'Thử lại sau'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Thank you',
          'Chúng tôi sẽ cập nhật sớm nhất',
          'success'
        )
      }
    })
  }
}
