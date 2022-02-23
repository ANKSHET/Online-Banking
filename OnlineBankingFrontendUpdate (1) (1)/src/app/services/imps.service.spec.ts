import { TestBed } from '@angular/core/testing';

import { ImpsService } from './imps.service';

describe('ImpsService', () => {
  let service: ImpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
