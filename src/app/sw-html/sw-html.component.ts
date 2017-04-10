import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-sw-html',
  templateUrl: './sw-html.component.html',
  styleUrls: ['./sw-html.component.css']
})
export class SwHtmlComponent implements OnInit {

  constructor(private router: Router, private activatedroute:ActivatedRoute) { }

  ngOnInit() {
  }

}
