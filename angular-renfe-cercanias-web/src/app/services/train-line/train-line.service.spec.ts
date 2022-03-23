import { TestBed } from '@angular/core/testing';

import { TrainLineService } from './train-line.service';

describe('TrainLineService', () => {
  let service: TrainLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
