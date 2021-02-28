import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  emailAddress: any;
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.emailAddress = localStorage.getItem('userEmail')
  }

  logOut() {
    localStorage.clear();
    sessionStorage.clear();
    this.route.navigate(['']);
  }

}
