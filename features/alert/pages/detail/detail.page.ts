import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alert } from '@alert/models/alert.class';

@Component({
  selector: 'alert-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss']
})
export class DetailPage implements OnInit {
  alert: Alert;

  constructor(private readonly router: Router) {
    const state = this.router.getCurrentNavigation().extras.state;
    if (state) this.alert = state.alert;
  }

  ngOnInit(): void {}
}
