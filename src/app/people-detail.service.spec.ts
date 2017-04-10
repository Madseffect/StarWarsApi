/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PeopleDetailService } from './people-detail.service';

describe('PeopleDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleDetailService]
    });
  });

  it('should ...', inject([PeopleDetailService], (service: PeopleDetailService) => {
    expect(service).toBeTruthy();
  }));
});
