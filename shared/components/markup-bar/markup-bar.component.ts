import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'markup-bar',
  templateUrl: './markup-bar.component.html',
  styleUrls: ['./markup-bar.component.scss']
})
export class MarkupBarComponent implements OnInit {
  @Input('title') title: string;

  constructor() {}

  ngOnInit(): void {}
}
