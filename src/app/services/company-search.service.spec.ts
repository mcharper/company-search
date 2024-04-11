import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CompanySearchService } from './company-search.service';

describe('CompanySearchService', () => {
  let service: CompanySearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CompanySearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
