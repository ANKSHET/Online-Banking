import { TestBed } from "@angular/core/testing";
import { Addaccount } from "./addaccount";

describe('addaccount', () => {
  let service: Addaccount;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Addaccount);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
