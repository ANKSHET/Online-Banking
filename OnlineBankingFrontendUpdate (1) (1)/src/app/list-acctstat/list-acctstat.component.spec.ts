import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAcctstatComponent } from './list-acctstat.component';

describe('ListAcctstatComponent', () => {
  let component: ListAcctstatComponent;
  let fixture: ComponentFixture<ListAcctstatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAcctstatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAcctstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
