/// <reference types="@types/ckeditor" />
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NewsService } from 'src/app/news.service';
import { CKEditorComponent } from 'ng2-ckeditor';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-admin-addnews',
  templateUrl: './admin-addnews.component.html',
  styleUrls: ['./admin-addnews.component.scss']
})
export class AdminAddnewsComponent implements OnInit {
  ckeConfig!: CKEDITOR.config;
  mycontent: string | undefined;
  log: string = '';
  @ViewChild("myckeditor") ckeditor!: CKEditorComponent;
  constructor(private newsService:NewsService,
              private formBuilder:FormBuilder) { }

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

    //Ckeditor
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true,
      removePlugins: 'exportpdf'
    };
  }
  formControlExample = new FormControl(20);
  form!: FormGroup; 
  submitted = false;
  listadd:any={
    image:'',
    name:'',
    days:'',
    athour:'',

  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  OnSubmit(){
    
  }
  onChange($event: any): void {
    console.log("onChange");
    //this.log += new Date() + "<br />";
  }

  onPaste($event: any): void {
    console.log("onPaste");
    //this.log += new Date() + "<br />";
  }
  
}
