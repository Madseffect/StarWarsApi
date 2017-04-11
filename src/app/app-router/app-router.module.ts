import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AllPeopleComponent } from 'app/all-people/all-people.component';
import { PeopleSearchComponent } from 'app/people-search/people-search.component';
import { SwHtmlComponent } from 'app/sw-html/sw-html.component';
import {PeopleDetailComponent} from "app/people-search/people-detail/people-detail.component";


const appRoutes: Routes = [

  { path: 'all-people', component: AllPeopleComponent },
  { path: 'people-search', component: PeopleSearchComponent },
  { path: 'sw-html', component: SwHtmlComponent },
  {path: 'people-detail',component:PeopleDetailComponent},
  { path: '', redirectTo: '/sw-html', pathMatch: 'full' },
  { path: '**', component: SwHtmlComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
