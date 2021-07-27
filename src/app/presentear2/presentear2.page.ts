import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AnimationOptions } from '@ionic/angular/providers/nav-controller';

@Component({
  selector: 'app-presentear2',
  templateUrl: './presentear2.page.html',
  styleUrls: ['./presentear2.page.scss'],
})
export class Presentear2Page implements OnInit {

  constructor(
    public modalController: ModalController,  
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  voltar() {

    let animations:AnimationOptions={
      animated: true,
      animationDirection: "back"
    }

    this.navCtrl.back(animations)

  }

  proximo(){
    this.navCtrl.navigateRoot('/presentear3');
  }

  fechar(){
    this.navCtrl.navigateRoot('/tabs/tab1');
  }

}
