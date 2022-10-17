import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { FileUploadService } from 'src/app/file-upload.service';
import { image } from '@cloudinary/url-gen/qualifiers/source';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-admin-editproduct',
  templateUrl: './admin-editproduct.component.html',
  styleUrls: ['./admin-editproduct.component.scss']
})
export class AdminEditproductComponent implements OnInit {
  ckeConfig!: CKEDITOR.config;
  form!: FormGroup; 
  submitted = false;
  formControlExample = new FormControl(20);
  edit:any=[];
  url=this.edit.img;
  constructor(private AdminService:AdminService,
    private route: ActivatedRoute,
    private Router: Router,
    private toastr :ToastrService,
    private uploadfileService:FileUploadService,
    private formBuilder:FormBuilder
    ) { }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        nameproduct: ['', [Validators.required,Validators.minLength(6)]],
        priceold: ['', [Validators.required,Validators.pattern("[0-9 ]{2,10}")]],
        sale: ['', [Validators.required, Validators.pattern("[0-9 ]{1,2}")]],

      },
    );
    $(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
    });
    this.getDetailProduct()
  }
  getDetailProduct(){
    this.route.params.subscribe((data:any)=>{
      this.AdminService.getDetailProduct(data.id).subscribe(data => {this.edit=data})
    })
  }
  OnSubmit(){
    this.submitted = true;
    let imageapi:any;
    //UPLOAD FILE
    if(this.form.valid){
    const file_data=this.file[0]; 
      const data= new FormData();
      data.append('file',file_data);
      data.append('upload_preset','project-angular');
      data.append('cloud_name','db1zqfcad')
      this.uploadfileService.upload(data).subscribe(response =>{
        console.log(response)
        imageapi=response.secure_url;
        this.edit.img=imageapi;
        //Sửa sản phâ
        this.AdminService.updateProduct(this.edit.id,this.edit).subscribe(data =>{
          this.Router.navigateByUrl('/admin/admin-product')
          this.toastr.success('Sửa thành công','thông báo');
        })
        })
    }

  }

  file:File[]=[];
  filebefore:File[]=[];
  onChange($event: any): void {
    console.log("onChange");
    //this.log += new Date() + "<br />";
  }

  onPaste($event: any): void {
    console.log("onPaste");
    //this.log += new Date() + "<br />";
  }
  onSelect(event:any) {
    console.log(event);
    this.file.push(...event.addedFiles);
    console.log(this.file);
    
  }
  
  onRemove(event:any) {
    console.log(event);
    this.file.splice(this.file.indexOf(event), 1);
  }
}


