import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsComponent } from './search-results.component';
import { ActivatedRoute } from '@angular/router';
import { MockInstance } from 'ng-mocks';

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchResultsComponent]
    })
      .compileComponents();

    MockInstance(ActivatedRoute, 'snapshot', jasmine.createSpy(), 'get')
      .and.returnValue({
        paramMap: new Map([['companynumber', '06500244']]),
      });

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
