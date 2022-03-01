import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from '../models/login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: ILogin = {userid: 'admin', password: '123'};
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userid: ['admin', Validators.required],
      password: ['123', Validators.required],
    });
  }

  get f() { return this.loginForm.controls; }

  loginSubmit() {
    if(this.f.userid.value == this.login.userid && 
      this.f.password.value == this.login.password) {
        localStorage.setItem('token', this.f.userid.value);
        this.router.navigateByUrl('/post-list');
      }
  }

}
