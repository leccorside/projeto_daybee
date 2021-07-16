import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AnimationOptions } from '@ionic/angular/providers/nav-controller';
import { NovointeressePageModule } from '../novointeresse/novointeresse.module';

@Component({
  selector: 'app-detalhesqueridinhos',
  templateUrl: './detalhesqueridinhos.page.html',
  styleUrls: ['./detalhesqueridinhos.page.scss'],
})
export class DetalhesqueridinhosPage {

  constructor(
    public modalController: ModalController,  
    private navCtrl: NavController
    ) {

  }

  fechar() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  addinteresse() {

    this.modalController.dismiss({
      'dismissed': true
    });
    
    this.navCtrl.navigateRoot('/novointeresse');
  }


  novadata() {

    this.modalController.dismiss({
      'dismissed': true
    });
    
    this.navCtrl.navigateRoot('/datapersonalizada');
  }

  ajustinteresse() {

    this.modalController.dismiss({
      'dismissed': true
    });
    
    this.navCtrl.navigateRoot('/ajusantecedencia');
  }


  
}
