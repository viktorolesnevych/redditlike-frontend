import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TopicsComponent} from './components/topics/topics.component';
import {SignupComponent} from './components/authorization/signup/signup.component';
import {LoginComponent} from './components/authorization/login/login.component';
import {ArticlelistComponent} from './components/articlelist/articlelist.component';
import {ArticleNewComponent} from "./components/article-new/article-new.component";

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
  },
  {
    path: 't/:name',
    component: ArticlelistComponent,
  },
  {
    path: 't/:name/new',
    component: ArticleNewComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
