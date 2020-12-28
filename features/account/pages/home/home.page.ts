import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  constructor(private readonly navCtrl: NavController, private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    //TODO: Should not appear if the user has already an account
  }

  onClick(): void {
    this.navCtrl.navigateForward(['register'], { relativeTo: this.route });
  }
}
