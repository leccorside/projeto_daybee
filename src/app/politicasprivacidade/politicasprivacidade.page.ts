import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-politicasprivacidade',
  templateUrl: './politicasprivacidade.page.html',
  styleUrls: ['./politicasprivacidade.page.scss'],
})
export class PoliticasprivacidadePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  fechar() {
    this.navCtrl.back();
  }

}
