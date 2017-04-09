import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {People} from './people';

@Injectable()
export class PeopleSearchService {
 apiString:string;
  constructor(private http:Http) { 
  }
  search(term:string):Observable<People[]>{
  this.apiString="https://swapi.co/api/people/?search="+term;
    return this.http.get(this.apiString).map(response=>response.json().results as People[])
  }

}
