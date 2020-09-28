import { interval } from 'rxjs';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // document.addEventListener('click', evt => {
    //   console.log(evt);
    // });

    // ================================

    // let counter = 0;

    // setInterval(() => {

    //   console.log(counter);
    //   counter++;
      
    // }, 1000);

    // ================================

    // setTimeout(() => {

    //   console.log("finished...");
      
    // }, 3000);

    const interval$ = interval(1000);

    interval$.subscribe(val => console.log("stream 1 => " + val));

    interval$.subscribe(val => console.log("stream 2 => " + val));
    
  }

}
