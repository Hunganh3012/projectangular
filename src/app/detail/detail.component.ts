import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin/admin.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  detail:any=[];
  constructor(private adminService:AdminService, private route:ActivatedRoute,private Router:Router, ) { }

  ngOnInit(): void {
    this.productDetail();
  }
  productDetail(){
    this.route.params.subscribe((data:any)=>{
      this.adminService.porductdetail(data.id).subscribe(data =>{
        this.detail=data;
        console.log(this.detail);
       
      })
    })
  }
  
}
