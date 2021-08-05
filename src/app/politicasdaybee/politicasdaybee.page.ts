import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-politicasdaybee',
  templateUrl: './politicasdaybee.page.html',
  styleUrls: ['./politicasdaybee.page.scss'],
})
export class PoliticasdaybeePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  fechar() {
    this.navCtrl.back();
  }

}
