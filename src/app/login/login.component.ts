import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedServiceService } from '../shared-service.service'
import { FormBuilder, FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms'
import { Router, ActivatedRoute } from "@angular/router"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(public serv: SharedServiceService, private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {

    sessionStorage.clear();
    localStorage.clear();

    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required, Validators.maxLength(30), Validators.minLength(10)]],
      passKey: ['', [Validators.minLength(4), Validators.maxLength(12), Validators.required]]
    })

    console.log();
  }

  letMeEnter() {
    if (this.form.valid) {
      console.log(this.form.value);
      sessionStorage.clear();
      localStorage.clear();
      sessionStorage.setItem('tempEmail', this.form.controls['email'].value);
      localStorage.setItem('tempEmail', this.form.controls['email'].value);
      this.route.navigate(['/otp']);
    }

  }

}
