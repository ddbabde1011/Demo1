import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.css']
})
export class ManageusersComponent implements OnInit {

  users : Register[] =[]
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      (response) => {
        console.log(response);
        this.users = response;
      }
    );
  }

}
