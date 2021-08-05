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
    this.navCtrl.back();
  }

  addinteresse() {
    
    this.navCtrl.navigateRoot('/tabs/novointeresse');
  }


  novadata() {

    this.navCtrl.navigateRoot('/tabs/datapersonalizada');
  }

  ajustinteresse() {
    
    this.navCtrl.navigateRoot('/tabs/ajusantecedencia');
  }

  configqueridinho(){
    this.navCtrl.navigateRoot('/tabs/configuracoesqueridinho');
  }

  detalhes(){
    this.navCtrl.navigateRoot('/tabs/presentear1');
  }


  
}
