import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { Observable, Subscription, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css',
})
export class ObservableComponent implements OnInit, OnDestroy {
  subscrition?: Subscription;
  httpClient = inject(HttpClient);
  data: any;

  // ngOnInit(): void {
  //   console.log('ObservableComponent');
  //   const myObservable = new Observable((subscriber) => {
  //     subscriber.next('Hello Observable!!!');
  //     subscriber.complete();
  //   });
  //  this.subscrition= myObservable.subscribe({
  //     next: (x) => console.log(x),
  //     error: (err) => console.error('wrong accured:' + err),
  //     complete: () => console.log('done'),
  //   });

  // }

  ngOnInit(): void {
    this.fetchData().subscribe({
      next: (response) => {
        console.log('response', response);
      },
      error: (error) => {
        console.error('error', error);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
  ngOnDestroy(): void {
    this.subscrition?.unsubscribe();
  }

  fetchData() {
    return this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts')
      // .pipe(map((response: any) => response.data));
  }
}
