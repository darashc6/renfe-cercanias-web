import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerServiceFormPageComponent } from './customer-service-form-page.component';

describe('CustomerServiceFormPageComponent', () => {
  let component: CustomerServiceFormPageComponent;
  let fixture: ComponentFixture<CustomerServiceFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerServiceFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerServiceFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
