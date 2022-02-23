import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpstransComponent } from './impstrans.component';

describe('ImpstransComponent', () => {
  let component: ImpstransComponent;
  let fixture: ComponentFixture<ImpstransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpstransComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpstransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
