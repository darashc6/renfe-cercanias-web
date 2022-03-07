import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAppInfoItemComponent } from './new-app-info-item.component';

describe('NewAppInfoItemComponent', () => {
  let component: NewAppInfoItemComponent;
  let fixture: ComponentFixture<NewAppInfoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAppInfoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAppInfoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
