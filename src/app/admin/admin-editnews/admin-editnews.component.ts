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
import Adapter from '../ckeditorAdaptor';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CloudinaryImage } from '@cloudinary/url-gen';
import { FileUploadService } from 'src/app/file-upload.service';
@Component({
  selector: 'app-admin-editnews',
  templateUrl: './admin-editnews.component.html',
  styleUrls: ['./admin-editnews.component.scss']
})
export class AdminEditnewsComponent implements OnInit {
  edit:any=[];
  constructor() { }

  ngOnInit(): void {
  }

  OnSubmit(){

  }
  nChange($event: any): void {
    console.log("onChange");
    //this.log += new Date() + "<br />";
  }

  onPaste($event: any): void {
    console.log("onPaste");
    //this.log += new Date() + "<br />";
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
