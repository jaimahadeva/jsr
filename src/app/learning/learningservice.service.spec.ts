import { TestBed } from '@angular/core/testing';

import { LearningserviceService } from './learningservice.service';

describe('LearningserviceService', () => {
  let service: LearningserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearningserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
