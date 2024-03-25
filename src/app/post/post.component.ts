import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-post',
  standalone: true,
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
  imports: [RouterOutlet, HeaderComponent, FormsModule],
})
export class PostComponent {
  login(loginForm:NgForm): void {

    console.log('loginForm', loginForm.valid, loginForm.value);
  }
}
