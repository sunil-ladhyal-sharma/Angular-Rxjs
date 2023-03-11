import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss'],
})
export class FromComponent implements OnInit, AfterViewInit {
  posts!: Array<object>;
  promises!:Promise<boolean>
  constructor() {}

  ngOnInit(): void {
    /* Converting array into observable */
    this.posts = [
      {
        author: 'Sun',
        book: 'Imagination',
      },
      {
        author: 'Sha',
        book: 'Fiction',
      },
      {
        author: 'Sun Sha',
        book: 'Quantam Physics',
      },
    ];

   
  }

  convertArrayToObservable() {
    from(this.posts).subscribe({
      next: (posts) => {
        console.log("From->Array to Obs",posts);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('"From->Array to Obs : completed');
      },
    });
  }

  convertPromisesToObservable() {
    this.promises = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      },3000);
    
    });

    from(this.promises).subscribe({
      next: (prom) => {
        console.log("From->Promises to Obs",prom);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('From->Promises to Obs : Completed');
      },
    });
  }

  ngAfterViewInit(): void {
    fromEvent(document.getElementById('event-click')!, 'click').subscribe({
      next: (event) => {
        console.log('From->Event to Obs', event);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('From->Event to Obs :Completed');
      },
    });
  }
}
