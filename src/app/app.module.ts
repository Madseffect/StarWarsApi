import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AllPeopleComponent } from './all-people/all-people.component';
import { PeopleSearchComponent } from './people-search/people-search.component';
import { SwHtmlComponent } from './sw-html/sw-html.component';

import{AppRouterModule} from './app-router/app-router.module';


@NgModule({
  declarations: [
    AppComponent,
    AllPeopleComponent,
    PeopleSearchComponent,
    SwHtmlComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
