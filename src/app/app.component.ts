import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootResponse';
  rajat: any;
  hideElem: boolean = false;

  constructor(private route: Router) {

  }

  ngOnInIt() {
    if (localStorage.getItem('userEmail') != '' || sessionStorage.getItem('userEmail') != '') {
      this.hideElem = true;
    }
  }




}
