import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-meuscartoes2',
  templateUrl: './meuscartoes2.page.html',
  styleUrls: ['./meuscartoes2.page.scss'],
})
export class Meuscartoes2Page implements OnInit {

  constructor(
    public modalController: ModalController,  
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  voltar() {
    this.navCtrl.back();
  }

  confirmar(){
    this.navCtrl.navigateRoot('/tabs/confirmacaoplano');
  }

}
