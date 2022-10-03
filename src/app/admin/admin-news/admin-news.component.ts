import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/news.service';
@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.scss']
})
export class AdminNewsComponent implements OnInit {

  constructor(private newsService:NewsService) { }
  ngOnInit(): void {
    this.getNews();
  }
  listNews:any=[];
  getNews(){
    return this.newsService.getNews().subscribe((data:any)=>{
      this.listNews=data;
    })
  }
}
