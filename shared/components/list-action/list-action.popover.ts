import { Component } from '@angular/core';
import { PopoverUtils } from '@core/utils';
import { ListAction } from '@shared/models/list-action.enum';

@Component({
  selector: 'list-action-popover',
  templateUrl: './list-action.popover.html',
  styleUrls: ['./list-action.popover.scss']
})
export class ListActionPopover {
  constructor(private readonly popoverUtils: PopoverUtils) {}

  onRedirect(): void {
    this.popoverUtils.popover.dismiss(ListAction.READ);
  }

  onUpdate(): void {
    this.popoverUtils.popover.dismiss(ListAction.UPDATE);
  }

  onRemove(): void {
    this.popoverUtils.popover.dismiss(ListAction.DELETE);
  }
}
