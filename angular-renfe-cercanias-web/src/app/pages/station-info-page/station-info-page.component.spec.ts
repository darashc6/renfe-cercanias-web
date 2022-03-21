import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationInfoPageComponent } from './station-info-page.component';

describe('StationInfoPageComponent', () => {
  let component: StationInfoPageComponent;
  let fixture: ComponentFixture<StationInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationInfoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
