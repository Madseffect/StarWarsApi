import { Component, OnInit } from '@angular/core';

import {People} from '../people';
import {PeopleService} from '../people.service';

import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-all-people',
  templateUrl: './all-people.component.html',
  styleUrls: ['./all-people.component.css'],
  providers: [PeopleService]
})
export class AllPeopleComponent implements OnInit {
  public people:People[]

  constructor(private service:PeopleService, private router: Router, private activatedroute:ActivatedRoute) { 
    service.getPeople().subscribe(people=>this.people=people);
  }

  ngOnInit() {
  }

}
