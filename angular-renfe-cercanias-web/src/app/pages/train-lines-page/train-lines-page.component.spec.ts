import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainLinesPageComponent } from './train-lines-page.component';

describe('TrainLinesPageComponent', () => {
  let component: TrainLinesPageComponent;
  let fixture: ComponentFixture<TrainLinesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainLinesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainLinesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
