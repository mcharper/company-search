import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultItemComponent } from './search-result-item.component';
import { ActivatedRoute } from '@angular/router';
import { MockInstance } from 'ng-mocks';

describe('SearchResultItemComponent', () => {
  let component: SearchResultItemComponent;
  let fixture: ComponentFixture<SearchResultItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchResultItemComponent]
    })
      .compileComponents();

    MockInstance(ActivatedRoute, 'snapshot', jasmine.createSpy(), 'get')
      .and.returnValue({
        paramMap: new Map([['companynumber', '06500244']]),
      });

    fixture = TestBed.createComponent(SearchResultItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
