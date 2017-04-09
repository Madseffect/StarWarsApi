import { Component, OnInit } from '@angular/core';

import {People} from '../people';
import {PeopleService} from '../people.service';


@Component({
  selector: 'app-all-people',
  templateUrl: './all-people.component.html',
  styleUrls: ['./all-people.component.css'],
  providers: [PeopleService]
})
export class AllPeopleComponent implements OnInit {
  public people:People[]

  constructor(private service:PeopleService) { 
    service.getPeople().subscribe(people=>this.people=people);
  }

  ngOnInit() {
  }

}
