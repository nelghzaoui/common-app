import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'toolbar-component',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() title: string;
  @Output() cliked = new EventEmitter();

  onClick(): void {
    this.cliked.emit();
  }
}
