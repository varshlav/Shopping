import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Result} from '../Result';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  searchedTerm: string;
  prodID: number;

  constructor(private http: HttpClient) { }

  searchProd (searched: string, url: string): Observable<any> {
    console.log('Fetch data service ' + searched);
    return this.http.get(url);
}

}
