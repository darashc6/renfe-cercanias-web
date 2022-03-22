import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainFaresPageComponent } from './train-fares-page.component';

describe('TrainFaresPageComponent', () => {
  let component: TrainFaresPageComponent;
  let fixture: ComponentFixture<TrainFaresPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainFaresPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainFaresPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
