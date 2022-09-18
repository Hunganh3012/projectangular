import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CurrencyMaskInputMode } from 'ngx-currency';
import { Input } from '@angular/core';
import * as $ from 'jquery';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-admin-addproduct',
  templateUrl: './admin-addproduct.component.html',
  styleUrls: ['./admin-addproduct.component.scss']
})
export class AdminAddproductComponent implements OnInit {
  listadd:any={
    name:'',
    sale:'',
    priceold:'',
    detail:'',
    img:''
  }
  options = {
    prefix: 'VND',
    thousands: ',',
    decimal: '.',
    inputMode: CurrencyMaskInputMode.NATURAL,
  };

  constructor( private AdminService:AdminService, private Router:Router,private toastr :ToastrService,private formBuilder: FormBuilder) { }
  
  


  // FORM VALIDATION
  form!: FormGroup;
  submitted = false;
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        nameproduct: ['', [Validators.required,Validators.minLength(6)]],
        linkphoto: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
          ]
        ],
        priceold: ['', [Validators.required,Validators.pattern("[0-9 ]{2,10}")]],
        sale: ['', [Validators.required, Validators.pattern("[0-9 ]{1,2}")]],
        detail: ['', [Validators.required, Validators.minLength(6),]],

        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  OnSubmit() {
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
      alert('oke');
    

   
      
      // this.AdminService.addProduct(this.listadd).subscribe(data =>{
    
      //   this.Router.navigateByUrl('/admin/admin-product')
      // })
      // this.toastr.success('Thêm thành công','thông báo');
    
  }
  // addProduct(){


  //   }
   
  
}
