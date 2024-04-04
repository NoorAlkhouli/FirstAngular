import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { ObservableComponent } from './observable/observable.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'post', component: PostComponent },
  { path: 'user', component: UserComponent },
  { path: 'observ', component: ObservableComponent },
  { path: '', pathMatch: 'full', redirectTo: 'user' }, //هي الباث  لما يكون عندي باث فاضي  يرجعني لصفحة معينك ما يعطيني صفحة فاضية

  { path: '**', component: PageNotFoundComponent },
];
