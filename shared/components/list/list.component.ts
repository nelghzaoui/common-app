import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '@core/models/item.interface';

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() items: Item[];
  @Output() redirect = new EventEmitter<Item>();
  @Output() edit = new EventEmitter<Item>();
  @Output() remove = new EventEmitter<Item>();

  constructor() {}

  onEdit(item: Item): void {
    this.edit.emit(item);
  }

  onRedirect(item: Item): void {
    this.redirect.emit(item);
  }

  onRemove(item: Item): void {
    this.remove.emit(item);
  }
}
