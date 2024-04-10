import { TestBed } from '@angular/core/testing';

import { OfficersListService } from './officers-list.service';

describe('OfficersListService', () => {
  let service: OfficersListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfficersListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
