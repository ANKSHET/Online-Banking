import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularaccstatComponent } from './particularaccstat.component';

describe('ParticularaccstatComponent', () => {
  let component: ParticularaccstatComponent;
  let fixture: ComponentFixture<ParticularaccstatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticularaccstatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticularaccstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
