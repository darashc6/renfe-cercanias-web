import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageOptionBtnComponent } from './profile-page-option-btn.component';

describe('ProfilePageOptionBtnComponent', () => {
  let component: ProfilePageOptionBtnComponent;
  let fixture: ComponentFixture<ProfilePageOptionBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePageOptionBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageOptionBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
