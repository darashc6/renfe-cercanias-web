import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTrainTimingsSectionComponent } from './search-train-timings-section.component';

describe('SearchTrainTimingsSectionComponent', () => {
  let component: SearchTrainTimingsSectionComponent;
  let fixture: ComponentFixture<SearchTrainTimingsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTrainTimingsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTrainTimingsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
