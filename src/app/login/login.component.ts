import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild("userEmail") userEmail: any;
  @ViewChild("password") password: any;

  constructor(private route: Router, private fb: FormBuilder) { }

  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  onRegisterClick() {
    this.route.navigate(['/register']);
  }

  onLoginClick() {
    debugger;
    if (this.userEmail.nativeElement.value == null || this.userEmail.nativeElement.value == undefined
      || this.userEmail.nativeElement.value == '') {
      // alert("Please enter userEmail!");
      return;
    }
    if (this.password.nativeElement.value == null || this.password.nativeElement.value == undefined
      || this.password.nativeElement.value == '') {
      // alert("Please enter password!");
      return;
    }
    this.route.navigate(['/dashboard-component']);
  }

}
