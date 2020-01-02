import { Component, OnInit } from '@angular/core';
import {FetchDataService} from '../../fetch-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { console.log('seacrh compoenent cosntructor')}

  ngOnInit() {
  }

}
