import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficersListComponent } from './officers-list.component';
import { ActivatedRoute } from '@angular/router';
import { MockInstance } from 'ng-mocks';

describe('OfficersListComponent', () => {
  let component: OfficersListComponent;
  let fixture: ComponentFixture<OfficersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficersListComponent]
    }).compileComponents();

    MockInstance(ActivatedRoute, 'snapshot', jasmine.createSpy(), 'get')
      .and.returnValue({
        paramMap: new Map([['companynumber', '06500244']]),
      });

    fixture = TestBed.createComponent(OfficersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
