import { Component } from '@angular/core';
import { MultislotComponent } from '../multislot/multislot.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [MultislotComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

}
