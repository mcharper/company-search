import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailsComponent } from './company-details.component';
import { ActivatedRoute } from '@angular/router';
import { MockInstance } from 'ng-mocks';

describe('CompanyDetailsComponent', () => {
  let component: CompanyDetailsComponent;
  let fixture: ComponentFixture<CompanyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyDetailsComponent]
    })
      .compileComponents();

    MockInstance(ActivatedRoute, 'snapshot', jasmine.createSpy(), 'get')
      .and.returnValue({
        paramMap: new Map([['companynumber', '06500244']]),
      });

    fixture = TestBed.createComponent(CompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
