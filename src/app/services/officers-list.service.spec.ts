import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { OfficersListService } from './officers-list.service';

describe('OfficersListService', () => {
  let service: OfficersListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(OfficersListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
