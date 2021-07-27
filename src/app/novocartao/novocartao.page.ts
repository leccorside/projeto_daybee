import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-novocartao',
  templateUrl: './novocartao.page.html',
  styleUrls: ['./novocartao.page.scss'],
})
export class NovocartaoPage implements OnInit {

  constructor(
    public modalController: ModalController,  
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  fechar(){
    this.navCtrl.navigateRoot('/tabs/tab1');
  }

  voltar() {
    this.navCtrl.back();
  }

  proximo(){
    this.navCtrl.navigateRoot('/novoendereco');
  }

  escolhercartao(){
    this.navCtrl.navigateRoot('/meuscartoes');
  }


}
