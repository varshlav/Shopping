import { Component, OnInit } from '@angular/core';
import {FetchDataService} from '../../fetch-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-prod-search',
  templateUrl: './prod-search.component.html',
  styleUrls: ['./prod-search.component.scss']
})
export class ProdSearchComponent implements OnInit {

  constructor(private fetchData: FetchDataService, private router: Router) {console.log('Prod search component is loaded'); }
  result: any;
  url: string;
  ngOnInit() {
    console.log(this.fetchData.searchedTerm);
    this.url = 'https://jsonplaceholder.typicode.com/photos?albumId=9';
    this.fetchData.searchProd(this.fetchData.searchedTerm, this.url).subscribe(
      data => {
        this.result = data;
      }
    );
  }

  viewDetails(id: number) {
    console.log('The id is ' + id);
    this.fetchData.prodID = id;
    this.router.navigateByUrl('main/details');
  }
}
