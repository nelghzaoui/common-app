import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkupBarComponent } from './markup-bar.component';

describe('MarkupBarComponent', () => {
  let component: MarkupBarComponent;
  let fixture: ComponentFixture<MarkupBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MarkupBarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkupBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
