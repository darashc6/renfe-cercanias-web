import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAppSectionComponent } from './new-app-section.component';

describe('NewAppSectionComponent', () => {
  let component: NewAppSectionComponent;
  let fixture: ComponentFixture<NewAppSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAppSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAppSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
