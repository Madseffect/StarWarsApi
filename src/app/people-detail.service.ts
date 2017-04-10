import { Injectable } from '@angular/core';

import {Http} from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {People} from './people';

@Injectable()
export class PeopleDetailService {

   apiString:string;
  constructor(private http:Http) { 
  }
  details(term:string):Observable<People>{
  
    return this.http.get(term).map(response=>response.json().results as People)
  }

}
