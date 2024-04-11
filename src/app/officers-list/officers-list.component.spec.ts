import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficersListComponent } from './officers-list.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OfficersListComponent', () => {
  let component: OfficersListComponent;
  let fixture: ComponentFixture<OfficersListComponent>;

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
