import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
  imports: [
    RouterOutlet,
    RouterModule,
    HeaderComponent,
    FormsModule,
    CommonModule,
  ],
})
export class PostComponent {
  hide = true;
  loginDto: { email: string; password: string } = { email: '', password: '' };
  // private navigationService=inject(this.navigationService);
  login(loginForm: NgForm): void {
    console.log('loginForm', loginForm.valid, loginForm.value);
  }
}
