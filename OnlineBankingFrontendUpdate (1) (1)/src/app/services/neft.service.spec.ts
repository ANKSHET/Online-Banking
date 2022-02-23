import { TestBed } from '@angular/core/testing';

import { NeftService } from './neft.service';

describe('NeftService', () => {
  let service: NeftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
