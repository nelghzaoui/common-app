import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  @Input() inputsList: string[];
  @Input() label: string;
  @Output() send = new EventEmitter();

  constructor(public builder: FormBuilder) {}

  ngOnInit(): void {
    this.inputsList = Object.keys({ name: '', port: '', url: '' });
  }

  onSend(): void {
    this.send.emit(this.form.value);
  }
}
