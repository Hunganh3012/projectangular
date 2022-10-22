import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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


  constructor(private newsService:NewsService,
    private route: ActivatedRoute,
    private formBuilder:FormBuilder,
    private toastr :ToastrService,
    private router:Router,
    private uploadfileService:FileUploadService) { }


  edit:any=[];
  public Editor = ClassicEditor;
  ckeConfig!: CKEDITOR.config;
  mycontent: string | undefined;
  log: string = '';
  public componentEvents: string[] = [];
  formControlExample = new FormControl(20);
  form!: FormGroup; 
  submitted = false;
  listadd:any={
    image:'',
    name:'',
    days:'',
    athour:''
  }
  img!: CloudinaryImage;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        nameproduct: ['', [Validators.required,Validators.minLength(6)]],
        // linkphoto: ['',[Validators.required,Validators.minLength(6),]],
      },
    );
    this.getNews();
  }
  getNews(){
    this.route.params.subscribe((data:any) =>{
      this.newsService.newsDetail(data.id).subscribe(data =>{
        this.listadd=data
      })
      console.log(this.listadd);
      
    })

  }
  OnSubmit(){
    this.submitted=true;
    let imageapi:any='';
    if(this.form.valid){
      const file_data=this.file[0];
      const data= new FormData();
      data.append('file',file_data)
      data.append('upload_preset','project-angular');
      data.append('cloud_name','db1zqfcad');
      this.uploadfileService.upload(data).subscribe(res =>{
        imageapi=res.secure_url;
        this.listadd.image=imageapi;
        this.newsService.updateNews(this.listadd.id,this.listadd).subscribe(data =>{
          this.router.navigateByUrl('admin/admin-news')
          this.toastr.success('Sửa thành công','thông báo')
        })

      })
    }
  }
  onChange($event: any): void {
    console.log("onChange");
    //this.log += new Date() + "<br />";
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
