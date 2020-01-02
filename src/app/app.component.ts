import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor() {console.log('App  component is loaded'); }

  ngOnInit() {
    console.log('App init lifecycle component is loaded');
  }
}
