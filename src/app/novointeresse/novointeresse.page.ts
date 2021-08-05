import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AnimationOptions } from '@ionic/angular/providers/nav-controller';

@Component({
  selector: 'app-novointeresse',
  templateUrl: './novointeresse.page.html',
  styleUrls: ['./novointeresse.page.scss'],
})
export class NovointeressePage {

  constructor(
    public modalController: ModalController,  
    private navCtrl: NavController
    ) { }


  fechar() {

    this.navCtrl.back();

  }



}
