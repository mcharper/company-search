import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchResultsComponent } from './search-results.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CompanySearchService } from '../services/company-search.service';
import { MockCompanySearchService } from '../../../mocks/MockCompanySearchService';

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;

  var service = new MockCompanySearchService();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchResultsComponent, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get(param: string) {
                  return param === "fragment" ? "BBC" : "";
                }
              }
            }
          }
        },
        {
          provide: CompanySearchService,
          useValue: service
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    expect(component.title).toBe("SEARCH RESULTS");
  });

  it('should render a list of search results', () => {
  });
});
