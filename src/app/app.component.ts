import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'FirstProject';

  show: boolean = true;

  items = ['Noor', 'Samya', 'Rouaa', 'Nabila', 'Ola'];
}
