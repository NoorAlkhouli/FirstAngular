import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'FirstProject';

  show: boolean = true;

  items = ['Noor', 'Samya', 'Rouaa', 'Nabila', 'Ola'];

  name: string = 'My Name';

  isChecked: boolean = true;

  printName() {
    alert(this.name);
  }
}
