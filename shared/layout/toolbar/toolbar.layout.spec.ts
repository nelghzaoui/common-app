import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToolbarLayout } from './toolbar.layout';

describe('ToolbarLayout', () => {
  let layout: ToolbarLayout;
  let fixture: ComponentFixture<ToolbarLayout>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ToolbarLayout],
        imports: [IonicModule.forRoot()]
      }).compileComponents();

      fixture = TestBed.createComponent(ToolbarLayout);
      layout = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(layout).toBeTruthy();
  });
});
