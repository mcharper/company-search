import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OfficersListComponent } from './officers-list.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockLocationService } from '../../../mocks/MockLocationService';
import { MockCompanySearchService } from '../../../mocks/MockCompanySearchService';
import { CompanySearchService } from '../services/company-search.service';
import { OfficersListService } from '../services/officers-list.service';
import { MockOfficerListService } from '../../../mocks/MockOfficerListService';

describe('OfficersListComponent', () => {
  let component: OfficersListComponent;
  let fixture: ComponentFixture<OfficersListComponent>;

  var mockCompanySearchService = new MockCompanySearchService();
  var mockOfficerListService = new MockOfficerListService();
  var mockLocationService = new MockLocationService();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficersListComponent, HttpClientTestingModule],
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
          provide: Location,
          useValue: mockLocationService
        },
        {
          provide: CompanySearchService,
          useValue: mockCompanySearchService
        },
        {
          provide: OfficersListService,
          useValue: mockOfficerListService
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(OfficersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
