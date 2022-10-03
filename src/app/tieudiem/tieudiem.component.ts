import { Component, OnInit } from '@angular/core';
import { OwlOptions,SlidesOutputData } from 'ngx-owl-carousel-o';
import { NewsService } from '../news.service';
@Component({
  selector: 'app-tieudiem',
  templateUrl: './tieudiem.component.html',
  styleUrls: ['./tieudiem.component.scss']
})
export class TieudiemComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots:true,
    navSpeed: 700,
    navText: [
      '<i class="fa-solid fa-angle-left "></i>',

     '<i class="fa-solid fa-angle-right"></i>',],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
        
      }
    },
    nav: true
  }


listNews:any=[];
listNewsSlide:any=[];
totalLength:any;
page:number=1;
public labels:any={   
  previousLabel:'',
  nextLabel:'',

}
  constructor( private newsService:NewsService) { }
  ngOnInit(): void {
    this.getNews()
    this.getNewsSlide();
  }
  loader=true;
  getNews(){
    return this.newsService.getNews().subscribe((data:any)=>{
      setTimeout(()=>{
        this.listNews=data;

        this.loader=false;
      },1000)
    })
  }
  getNewsSlide(){
    return this.newsService.getNews().subscribe((data:any)=>{
      this.listNewsSlide=data.slice(0,4)
      console.log(this.listNewsSlide)
    })
  }
}
