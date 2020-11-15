import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'toolbar-component',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() title: string;
  @Output() click = new EventEmitter<Event>();

  onClick(): void {
    this.click.emit();
  }
}
