import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-meuscartoes',
  templateUrl: './meuscartoes.page.html',
  styleUrls: ['./meuscartoes.page.scss'],
})
export class MeuscartoesPage implements OnInit {

  constructor(
    public modalController: ModalController,  
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  voltar() {
    this.navCtrl.back();
  }

  proximo(){
    this.navCtrl.navigateRoot('/meuscartoes');
  }

  novocartao(){
    this.navCtrl.navigateRoot('/novocartao');
  }

}
