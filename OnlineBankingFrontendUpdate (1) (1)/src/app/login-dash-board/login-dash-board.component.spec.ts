import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDashBoardComponent } from './login-dash-board.component';

describe('LoginDashBoardComponent', () => {
  let component: LoginDashBoardComponent;
  let fixture: ComponentFixture<LoginDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDashBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
