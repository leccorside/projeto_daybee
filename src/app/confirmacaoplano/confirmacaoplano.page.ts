import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-confirmacaoplano',
  templateUrl: './confirmacaoplano.page.html',
  styleUrls: ['./confirmacaoplano.page.scss'],
})
export class ConfirmacaoplanoPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  voltar() {
    this.navCtrl.back();
  }

  confirmar(){
    this.navCtrl.navigateRoot('/tabs/comofunciona');
  }

}
