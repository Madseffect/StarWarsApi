import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { People } from './people';
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleService {
  private request:Observable<People[]>


  constructor(http:Http) {
    this.request= http.get('http://swapi.co/api/people/?page=1').map(response=>response.json().results) 
  }
  public getPeople():Observable<People[]> {return this.request;}

}
