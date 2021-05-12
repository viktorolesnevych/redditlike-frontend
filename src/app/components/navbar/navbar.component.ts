import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.searchSubject.subscribe(currentUser => {
      this.currentUser = currentUser;
      console.log('Navbar Current User: ' + this.currentUser);
    });
  }

  // logging user out, clearing localstorage, returning to login form
  logout(): void {
    this.userService.logoutUser();
  }

}
