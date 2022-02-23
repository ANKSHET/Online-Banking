import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraccountdetailsComponent } from './useraccountdetails.component';

describe('UseraccountdetailsComponent', () => {
  let component: UseraccountdetailsComponent;
  let fixture: ComponentFixture<UseraccountdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseraccountdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseraccountdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
