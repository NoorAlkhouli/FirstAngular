import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  { path: 'post', component: PostComponent },
  { path: 'user', component: UserComponent },
];
