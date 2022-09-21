import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CurrencyMaskInputMode } from 'ngx-currency';
import { Input } from '@angular/core';
import {Cloudinary, CloudinaryImage, } from '@cloudinary/url-gen';
import { FileUploadService } from 'src/app/file-upload.service';
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
  styleUrls: ['./admin-addproduct.component.scss'],
  providers:[FileUploadService]
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

  constructor( private AdminService:AdminService,
     private Router:Router,
     private toastr :ToastrService,
     private formBuilder: FormBuilder,
      private uploadfileService:FileUploadService
  ) { }
  
  

  // FORM VALIDATION
  form!: FormGroup; 
  submitted = false;
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        nameproduct: ['', [Validators.required,Validators.minLength(6)]],
        // linkphoto: ['',[Validators.required,Validators.minLength(6),]],
        priceold: ['', [Validators.required,Validators.pattern("[0-9 ]{2,10}")]],
        sale: ['', [Validators.required, Validators.pattern("[0-9 ]{1,2}")]],
        detail: ['', [Validators.required, Validators.minLength(6),]],
        acceptTerms: [false, Validators.requiredTrue]
      },
    );

      //UPLOAD FILE


  }
  img!: CloudinaryImage;

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  OnSubmit() {
    this.submitted = true;


    //Upload FILE
    let imageapi:any='';
    if(this.form.valid){
      const file_data=this.file[0]; 
      const data= new FormData();
      data.append('file',file_data)
      data.append('upload_preset','project-angular');
      data.append('cloud_name','db1zqfcad')
      this.uploadfileService.upload(data).subscribe(response =>{
        console.log(response)
        imageapi=response.secure_url;
        this.listadd.img=imageapi;
        this.AdminService.addProduct(this.listadd).subscribe(data =>{

          console.log(data)
          this.Router.navigateByUrl('/admin/admin-product')
        })
        this.toastr.success('Thêm thành công','thông báo');
        })
        console.log(imageapi)

        console.log(this.listadd)


      //Success add product


    }else{
      this.toastr.error('Vui lòng nhập thông tin','thông báo');
      return;
    }

   
      

    
  }  

  //Upload File
  file:File[]=[]
  onSelect(event:any) {
    console.log(event);
    this.file.push(...event.addedFiles);
  }
  
  onRemove(event:any) {
    console.log(event);
    this.file.splice(this.file.indexOf(event), 1);
  }
}


