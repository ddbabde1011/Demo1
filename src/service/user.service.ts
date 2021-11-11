import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  registerUrl = 'http://localhost:8081/user/addnew';
  getUrl = 'http://localhost:8081/users';
  constructor(private httpClient: HttpClient) { }

  onRegister(registerForm: any) {
    return this.httpClient.post(this.registerUrl, registerForm);
  }

  getUsers(){
    return this.httpClient.get<any>(this.getUrl);
  }
}
