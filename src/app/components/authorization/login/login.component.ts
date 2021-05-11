import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public emailAddress: string;
  public password: string;
  errorText = '';

  constructor(private userService: UserService) { }

  loginUser(): void {
    const user = {emailAddress: this.emailAddress, password: this.password};
    this.userService.loginUser(user);
    if (localStorage.getItem('currentError')){
      this.errorText = localStorage.getItem('currentError');
    }
  }

  ngOnInit(): void {
  }

}
