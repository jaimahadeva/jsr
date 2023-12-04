import { TestBed } from '@angular/core/testing';

import { LocalecomService } from './localecom.service';

describe('LocalecomService', () => {
  let service: LocalecomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalecomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
