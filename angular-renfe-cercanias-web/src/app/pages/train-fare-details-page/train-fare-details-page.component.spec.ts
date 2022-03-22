import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainFareDetailsPageComponent } from './train-fare-details-page.component';

describe('TrainFareDetailsPageComponent', () => {
  let component: TrainFareDetailsPageComponent;
  let fixture: ComponentFixture<TrainFareDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainFareDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainFareDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
