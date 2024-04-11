import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { CompanyDetailsComponent } from './company-details.component';
import { CompanySearchService } from '../services/company-search.service';
import { MockCompanySearchService } from '../../../mocks/MockCompanySearchService';

describe('CompanyDetailsComponent', () => {
  let component: CompanyDetailsComponent;
  let fixture: ComponentFixture<CompanyDetailsComponent>;

  var service = new MockCompanySearchService();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyDetailsComponent, HttpClientTestingModule],
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
        },
        {
          provide: CompanySearchService,
          useValue: service
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
