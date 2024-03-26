import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { ObservableComponent } from './observable/observable.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FormsModule, CommonModule, ReactiveFormsModule, HeaderComponent,PostComponent,UserComponent,ObservableComponent]
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
