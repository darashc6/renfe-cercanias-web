import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainLineStationInfoCardComponent } from './train-line-station-info-card.component';

describe('TrainLineStationInfoCardComponent', () => {
  let component: TrainLineStationInfoCardComponent;
  let fixture: ComponentFixture<TrainLineStationInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainLineStationInfoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainLineStationInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
