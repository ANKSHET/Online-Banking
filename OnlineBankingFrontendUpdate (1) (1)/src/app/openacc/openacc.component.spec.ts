import { ComponentFixture, TestBed } from '@angular/core/testing';

import { openaccComponent } from './openacc.component';

describe('OpenaccComponent', () => {
  let component: openaccComponent;
  let fixture: ComponentFixture<openaccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ openaccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(openaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
