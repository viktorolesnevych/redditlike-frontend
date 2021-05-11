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
  searchSubject = new Subject();

  constructor(private http: HttpClient, private router: Router) { console.log('user service loaded'); }

  registerUser(newUser): void {
    this.http
      .post(`${herokuUrl}/auth/users/register`, newUser)
      .subscribe(response => console.log(response), err => console.log(err));
  }

  loginUser(user): void {
    console.log(user);
    this.http
      .post(`${herokuUrl}/auth/users/login`, user)
      .subscribe(response => {
        const token = response['jwt'];
        localStorage.setItem('currentUser', `${user.emailAddress}`);
        localStorage.setItem('token', `${token}`);
        console.log(response, token);
        this.currentUser = user.emailAddress;
        this.searchSubject.next(this.currentUser);
        this.router.navigate(['/']);
      }, err => console.log(err));
  }
  logoutUser(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUser = '';
    this.searchSubject.next(this.currentUser);
    this.router.navigate(['/login']);
  }
}
