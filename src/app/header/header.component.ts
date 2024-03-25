import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PostComponent } from "../post/post.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [RouterLink, RouterOutlet, PostComponent]
})
export class HeaderComponent {

}
