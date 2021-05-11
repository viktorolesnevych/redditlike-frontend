import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';

const herokuUrl = 'http://redditlikeapi-env.eba-tpi4ysj3.us-east-2.elasticbeanstalk.com';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: string;
  errorText: string;
  searchSubject = new Subject();

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(newUser): void {
    this.http
      .post(`${herokuUrl}/auth/users/register`, newUser)
      .subscribe(response => {
        localStorage.removeItem('currentError');
        this.router.navigate(['/']);
      }, err =>
        localStorage.setItem('currentError', `${this.getAuthErrorText(err)}`));
  }

  loginUser(user): void {
    console.log(user);
    this.http
      .post(`${herokuUrl}/auth/users/login`, user)
      .subscribe(response => {
        const token = response['jwt'];
        localStorage.setItem('currentUser', `${user.emailAddress}`);
        localStorage.setItem('token', `${token}`);
        localStorage.removeItem('currentError');
        this.currentUser = user.emailAddress;
        this.searchSubject.next(this.currentUser);
        this.router.navigate(['/']);
      }, err => localStorage.setItem('currentError', `${this.getAuthErrorText(err)}`));
  }
  logoutUser(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    localStorage.removeItem('currentError');
    this.currentUser = '';
    this.searchSubject.next(this.currentUser);
    this.router.navigate(['/login']);
  }
  getAuthErrorText(response: any): string{
    console.log(response);
    console.log(response['status']);
    if (response['status'] == 409) {
      console.log('YES');
      return 'User already exists';
    }
  }
}
