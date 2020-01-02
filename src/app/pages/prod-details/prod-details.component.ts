import { Component, OnInit } from '@angular/core';
import {FetchDataService} from '../../fetch-data.service';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.scss']
})
export class ProdDetailsComponent implements OnInit {
  private url: string;
  prodDetails: any;
  constructor(private fetchData: FetchDataService) { console.log('Prod details component is loaded');
  this.prodDetails = {
    id: 23,
    albumId: 3,
    url: '',
    thumbnailUrl: ''
  };
  }

  ngOnInit() {
    this.url = 'https://jsonplaceholder.typicode.com/photos?id=' + this.fetchData.prodID;
    this.fetchData.searchProd('Invoke from Prod Details', this.url).subscribe(
      data => {
        console.log(data);
        this.prodDetails = data[0];
      }
    );
  }

}
