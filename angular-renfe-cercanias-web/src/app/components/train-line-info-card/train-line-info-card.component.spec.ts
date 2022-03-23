import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainLineInfoCardComponent } from './train-line-info-card.component';

describe('TrainLineInfoCardComponent', () => {
  let component: TrainLineInfoCardComponent;
  let fixture: ComponentFixture<TrainLineInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainLineInfoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainLineInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
