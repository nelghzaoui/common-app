import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'toolbar-component',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() title: string;
  @Output() clicked = new EventEmitter<MouseEvent>();
  isShown: boolean;

  ngOnInit(): void {
    this.isShown = this.clicked.observers.length > 0;
  }

  onClick(): void {
    this.clicked.emit();
  }
}
