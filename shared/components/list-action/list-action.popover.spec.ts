import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActionPopover } from './list-action.popover';

describe('ListActionPopover', () => {
  let component: ListActionPopover;
  let fixture: ComponentFixture<ListActionPopover>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListActionPopover]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListActionPopover);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
