import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../news.service';
@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  newsDetail:any=[];
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private newsService:NewsService

  ) { this.newsDetail.detail='<img'}

  ngOnInit(): void {
    this.getNewsDetail()
  }
  getNewsDetail(){
    this.route.params.subscribe((data:any)=>{
      this.newsService.newsDetail(data.id).subscribe(data=>{
        this.newsDetail=data;
        console.log(this.newsDetail)
      })
    })
  }
}
