import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'toolbar-layout',
  templateUrl: './toolbar.layout.html',
  styleUrls: ['./toolbar.layout.scss']
})
export class ToolbarLayout {
  @Input() title: string;
  @Output() click = new EventEmitter<Event>();
}
