import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultStationRadioBtnComponent } from './default-station-radio-btn.component';

describe('DefaultStationRadioBtnComponent', () => {
  let component: DefaultStationRadioBtnComponent;
  let fixture: ComponentFixture<DefaultStationRadioBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultStationRadioBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultStationRadioBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
