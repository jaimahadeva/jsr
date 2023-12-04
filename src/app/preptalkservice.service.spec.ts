import { TestBed } from '@angular/core/testing';

import { PreptalkserviceService } from './preptalkservice.service';

describe('PreptalkserviceService', () => {
  let service: PreptalkserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreptalkserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
