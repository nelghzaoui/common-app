import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent {
  @Input() label: string;
  @Output() submit = new EventEmitter<MouseEvent>();

  constructor() {}

  onClick(): void {
    this.submit.emit();
  }
}
