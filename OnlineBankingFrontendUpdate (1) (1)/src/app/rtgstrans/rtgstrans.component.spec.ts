import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtgstransComponent } from './rtgstrans.component';

describe('RtgstransComponent', () => {
  let component: RtgstransComponent;
  let fixture: ComponentFixture<RtgstransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtgstransComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtgstransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
