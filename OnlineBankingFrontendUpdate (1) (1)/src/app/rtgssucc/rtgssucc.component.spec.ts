import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtgssuccComponent } from './rtgssucc.component';

describe('RtgssuccComponent', () => {
  let component: RtgssuccComponent;
  let fixture: ComponentFixture<RtgssuccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtgssuccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtgssuccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
