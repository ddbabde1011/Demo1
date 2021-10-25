import { Component, Input, OnInit } from '@angular/core';


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  constructor() { }

  @Input() selectedValue !: string;

  foods: Food[] = [
    {value: 'Female', viewValue: 'Female'},
    {value: 'Male', viewValue: 'Male'},
    {value: 'Other', viewValue: 'Other'}
  ];

  ngOnInit(): void {

  }


}

