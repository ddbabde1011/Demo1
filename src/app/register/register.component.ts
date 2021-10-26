import { Component, Input, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

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

  constructor(private fb:FormBuilder) { }

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
    console.log(this.registerForm.value);
  }

}
