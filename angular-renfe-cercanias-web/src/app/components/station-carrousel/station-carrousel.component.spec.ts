import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationCarrouselComponent } from './station-carrousel.component';

describe('StationCarrouselComponent', () => {
  let component: StationCarrouselComponent;
  let fixture: ComponentFixture<StationCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationCarrouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
