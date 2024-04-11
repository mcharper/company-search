import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultItemComponent } from './search-result-item.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SearchResultItemComponent', () => {
  let component: SearchResultItemComponent;
  let fixture: ComponentFixture<SearchResultItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchResultItemComponent, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get(param: string) {
                  return param === "companyNumber" ? "123" : "";
                }
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchResultItemComponent);
    component = fixture.componentInstance;
    component.companyDetails = {
      company_number: "123"
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
