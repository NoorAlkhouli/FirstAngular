import { CommonModule } from '@angular/common';
import { Component, Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PipeFirst } from '../app.pipe';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule, PipeFirst],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  public firstName = 'Noor';
  birthday = new Date(1998, 2, 26);
  paragraph="in the shortDate format";

  format = this.paragraph;
  toggleFormat(){
    alert(this.format)
  }
}
