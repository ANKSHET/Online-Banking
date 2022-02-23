import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NefttransComponent } from './nefttrans.component';

describe('NefttransComponent', () => {
  let component: NefttransComponent;
  let fixture: ComponentFixture<NefttransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NefttransComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NefttransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
