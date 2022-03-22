import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainFareInfoCardComponent } from './train-fare-info-card.component';

describe('TrainFareInfoCardComponent', () => {
  let component: TrainFareInfoCardComponent;
  let fixture: ComponentFixture<TrainFareInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainFareInfoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainFareInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
