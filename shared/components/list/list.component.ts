import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '@shared/models/item.interface';

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() items: Item[];
  @Output() redirect = new EventEmitter<Item>();
  @Output() action = new EventEmitter<Item>();

  onAction(item: Item): void {
    this.action.emit(item);
  }

  onRedirect(item: Item): void {
    this.redirect.emit(item);
  }
}
