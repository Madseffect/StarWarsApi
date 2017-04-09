/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PeopleSearchService } from './people-search.service';

describe('PeopleSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleSearchService]
    });
  });

  it('should ...', inject([PeopleSearchService], (service: PeopleSearchService) => {
    expect(service).toBeTruthy();
  }));
});
