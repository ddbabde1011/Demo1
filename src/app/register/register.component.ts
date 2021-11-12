import { Component, Input, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user.service';

export class Register {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public phonenumber: string,
    public email: string,
    public password: string,
    public gender: string
  ) {
  }
}

interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder,
              private router : Router,
              private userService: UserService) { }

  @Input() selectedValue !: string;

   genders: Gender[] = [
    {value: 'Female', viewValue: 'Female'},
    {value: 'Male', viewValue: 'Male'},
    {value: 'Other', viewValue: 'Other'}
  ];

  ngOnInit() {
  }

  registerForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    name:['', Validators.required],
    phoneNumber:['', Validators.required, Validators.maxLength(10),Validators.minLength(10)],
    gender:['', Validators.required]
  })


  onRegister() {
    if (this.registerForm.invalid) {
      return;
    }
    this.userService.onRegister(this.registerForm.value)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      });
    console.log(this.registerForm.value);
    this.router.navigate(['./dashboard-component'])
  }

  // getUsers(){
  //   this.userService.getUsers().subscribe(
  //     (response: Register[]) => {
  //       console.log(response);
  //       this.users = response;
  //     }
  //   );
  // }

}
