import { TestBed } from '@angular/core/testing';

import { RtgsService } from './rtgs.service';

describe('RtgsService', () => {
  let service: RtgsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RtgsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
