import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TopicsComponent} from './components/topics/topics.component';
import {SignupComponent} from './components/authorization/signup/signup.component';
import {LoginComponent} from './components/authorization/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: TopicsComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
