import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelWithPageComponent } from './travel-with-page.component';

describe('TravelWithPageComponent', () => {
  let component: TravelWithPageComponent;
  let fixture: ComponentFixture<TravelWithPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelWithPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelWithPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
