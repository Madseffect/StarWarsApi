import { Component, OnInit, Input } from '@angular/core';
import {PeopleSearchComponent} from 'app/people-search/people-search.component';
import {People} from 'app/people';

import {Router, ActivatedRoute, Params} from '@angular/router';

import { Observable }        from 'rxjs/Observable';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {
@Input()  peopleDetail:People;

  constructor(private router: Router, private activatedroute:ActivatedRoute) { 
    
    
  }

  ngOnInit() {
   
  }

}
