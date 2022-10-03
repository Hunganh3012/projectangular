import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NewsService } from 'src/app/news.service';
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
}
