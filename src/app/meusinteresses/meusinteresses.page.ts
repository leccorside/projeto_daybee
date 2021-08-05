import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-meusinteresses',
  templateUrl: './meusinteresses.page.html',
  styleUrls: ['./meusinteresses.page.scss'],
})
export class MeusinteressesPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  fechar() {
    this.navCtrl.back();
  }

}
