import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodBtnComponent } from './payment-method-btn.component';

describe('PaymentMethodBtnComponent', () => {
  let component: PaymentMethodBtnComponent;
  let fixture: ComponentFixture<PaymentMethodBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentMethodBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMethodBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
