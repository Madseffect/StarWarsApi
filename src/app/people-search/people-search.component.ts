import { Component, OnInit, Output } from '@angular/core';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import 'rxjs/add/operator/switchMap';

import {PeopleSearchService} from '../people-search.service';

import {People} from '../people';

import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-people-search',
  templateUrl: './people-search.component.html',
  styleUrls: ['./people-search.component.css'],
  providers:[PeopleSearchService],
 
 
  
})
export class PeopleSearchComponent implements OnInit {
  peoples:Observable<People[]>;
  private searchTerms=new Subject<string>();
  public peopleDetail:People;

  constructor(private searchService:PeopleSearchService,  private router: Router, private activatedroute:ActivatedRoute) { }

  search(term:string):void{
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.peoples = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.searchService.search(term)
          : Observable.of<People[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<People[]>([]);
      });
  }
public onSelect(people:People): void{
  this.peopleDetail=people; 
 
 //this.detailService.details(people.url).subscribe(peopleDetail=>this.peopleDetail=peopleDetail);
 

  

}
 

}
