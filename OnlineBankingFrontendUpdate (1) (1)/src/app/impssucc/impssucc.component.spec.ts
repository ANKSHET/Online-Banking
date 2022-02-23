import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpssuccComponent } from './impssucc.component';

describe('ImpssuccComponent', () => {
  let component: ImpssuccComponent;
  let fixture: ComponentFixture<ImpssuccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpssuccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpssuccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
