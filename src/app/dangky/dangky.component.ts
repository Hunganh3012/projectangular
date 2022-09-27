import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.scss']
})
export class DangkyComponent implements OnInit {
  form!: FormGroup; 
  submitted = false;
  show = false;
  password:any;
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.password = 'password';
    this.form = this.formBuilder.group(
      {
        firstname: ['', [Validators.required,Validators.minLength(6)]],
        lastname: ['',[Validators.required,Validators.minLength(6),]],
        email: ['', [Validators.required,Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required]
      },
      {
        validator: this.ConfirmedValidator('password', 'confirmPassword'),
      }
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  OnSubmit(){
    this.submitted = true;
  }
  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors['confirmedValidator']
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
  clickeyes(){
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
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
