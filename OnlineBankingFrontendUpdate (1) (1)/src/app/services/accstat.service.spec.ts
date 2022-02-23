import { TestBed } from '@angular/core/testing';

import { AccstatService } from './accstat.service';

describe('AccstatService', () => {
  let service: AccstatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccstatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
