import { Component } from '@angular/core';
import { PopoverTool } from '@core/tools/components/popover.tool';
import { ListAction } from '@shared/models/list-action.enum';

@Component({
  selector: 'list-action-popover',
  templateUrl: './list-action.popover.html',
  styleUrls: ['./list-action.popover.scss']
})
export class ListActionPopover {
  constructor(private readonly popoverTool: PopoverTool) {}

  onRedirect(): void {
    this.popoverTool.popover.dismiss(ListAction.READ);
  }

  onUpdate(): void {
    this.popoverTool.popover.dismiss(ListAction.UPDATE);
  }

  onRemove(): void {
    this.popoverTool.popover.dismiss(ListAction.DELETE);
  }
}
