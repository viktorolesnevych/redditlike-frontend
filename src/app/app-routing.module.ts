import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import {TopicsComponent} from './components/topics/topics.component';

const routes: Routes = [
  {
    path: '',
    component: TopicsComponent
=======
import {SignupComponent} from './components/authorization/signup/signup.component';
import {LoginComponent} from "./components/authorization/login/login.component";

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
>>>>>>> 2b2120b7f99e09c1f2d2f3d1f2e0d422d2eeb001
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
