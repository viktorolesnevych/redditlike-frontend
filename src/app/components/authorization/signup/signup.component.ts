import {Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userName: string;
  emailAddress: string;
  password: string;
  errorText = '';
  constructor(private userService: UserService) {
  }
  ngOnInit(): void {

  }
  registerUser(): void {
    const newUser = {userName: this.userName, emailAddress: this.emailAddress, password: this.password};
    this.userService.registerUser(newUser);
    if (localStorage.getItem('currentError')){
      this.errorText = localStorage.getItem('currentError');
    }
  }

}
