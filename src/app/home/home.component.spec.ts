import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    expect(component.title).toBe("Company Search");
  });

  it('should render label', () => {
    expect(component.searchPlaceholder).toBe("Company name or number");
  });

  it('should render placeholder', () => {
    expect(component.searchPlaceholder).toBe("Company name or number");
  });

  it('it should render a button labelled Search', () => {
    expect(component.searchButtonText).toBe("Search");
  });
});
