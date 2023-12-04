import { TestBed } from '@angular/core/testing';

import { LearninglocalserviceService } from './learninglocalservice.service';

describe('LearninglocalserviceService', () => {
  let service: LearninglocalserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearninglocalserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
