import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  customer={
    lastname:'',
    firstname:'',
    phone:'',
    email:'',
    detailcontent:'',
  }

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.customer)
  }
}
