import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Location} from '@angular/common';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.scss']
})
export class DangnhapComponent implements OnInit {

  constructor( private location:Location) { }

  ngOnInit(): void {
  }
  backClicked() {
    this.location.back();
  }
}
