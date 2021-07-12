import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { DetalhesqueridinhosPage } from '../detalhesqueridinhos/detalhesqueridinhos.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private navCtrl: NavController,
    public modalController: ModalController
    ) {}

  /*detalhes(){
    this.navCtrl.navigateRoot('/detalhesqueridinhos');
  }*/

  async detalhes() {
    const modal = await this.modalController.create({
      component: DetalhesqueridinhosPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
