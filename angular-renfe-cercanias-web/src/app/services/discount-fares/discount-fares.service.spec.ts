import { TestBed } from '@angular/core/testing';

import { DiscountFaresService } from './discount-fares.service';

describe('DiscountFaresService', () => {
  let service: DiscountFaresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscountFaresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
