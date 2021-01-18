import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'large-button',
  templateUrl: './large-button.component.html',
  styleUrls: ['./large-button.component.scss']
})
export class LargeButtonComponent {
  @Input() label: string;
  @Output() submit = new EventEmitter<MouseEvent>();

  onClick(): void {
    this.submit.emit();
  }
}
