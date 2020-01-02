import { Component, OnInit } from '@angular/core';
import {FetchDataService} from '../../fetch-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchTerm: string;

  constructor(private fetchServ: FetchDataService, private router: Router) {
    console.log('Home component is loaded');
  }

  ngOnInit() {
  }

  searchItem(item: string) {
    this.fetchServ.searchedTerm = item;
    this.router.navigateByUrl('main/search');

  }
}
