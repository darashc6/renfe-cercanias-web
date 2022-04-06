import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainLineNameCardComponent } from './train-line-name-card.component';

describe('TrainLineNameCardComponent', () => {
  let component: TrainLineNameCardComponent;
  let fixture: ComponentFixture<TrainLineNameCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainLineNameCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainLineNameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
