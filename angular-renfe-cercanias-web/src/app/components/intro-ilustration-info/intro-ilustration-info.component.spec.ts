import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroIlustrationInfoComponent } from './intro-ilustration-info.component';

describe('IntroIlustrationInfoComponent', () => {
  let component: IntroIlustrationInfoComponent;
  let fixture: ComponentFixture<IntroIlustrationInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroIlustrationInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroIlustrationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
