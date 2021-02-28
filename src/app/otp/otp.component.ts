import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms'
import { Router, ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  form: FormGroup;
  email: any;
  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {

    this.email = localStorage.getItem('tempEmail') == '' ? sessionStorage.getItem('tempEmail') : localStorage.getItem('tempEmail');

    this.form = this.fb.group({
      otp: ['', [Validators.minLength(6), Validators.maxLength(6), Validators.required]]
    })
  }

  login() {
    if (this.form.valid) {
      console.log(this.form.value);
      sessionStorage.clear();
      localStorage.clear();
      sessionStorage.setItem('userEmail', this.email);
      localStorage.setItem('userEmail', this.email);
      this.route.navigate(['/home']);
    }
  }

}
