import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  @Input() inputs: string[];
  @Input() labels: string[];
  @Output() send = new EventEmitter();

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.builder.group(this.inputs);
    this.inputs = Object.keys(this.inputs);
  }

  onSend(): void {
    this.send.emit(this.form.value);
  }

  get valid(): boolean {
    return this.form.valid;
  }
}
