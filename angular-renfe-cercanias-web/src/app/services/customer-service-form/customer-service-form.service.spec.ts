import { TestBed } from '@angular/core/testing';

import { CustomerServiceFormService } from './customer-service-form.service';

describe('CustomerServiceFormService', () => {
  let service: CustomerServiceFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerServiceFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
