import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-admin-option',
  templateUrl: './admin-option.component.html',
  styleUrls: ['./admin-option.component.scss']
})
export class AdminOptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  //   $(document).on("load",function () {
  //     $('#sidebarCollapse').on('click', function (e) {
  //           e.preventDefault();
  //         $('#sidebar').toggleClass('active');
  //     });
  // });
  }

} 
