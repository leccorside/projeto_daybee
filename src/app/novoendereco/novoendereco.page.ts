import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-novoendereco',
  templateUrl: './novoendereco.page.html',
  styleUrls: ['./novoendereco.page.scss'],
})
export class NovoenderecoPage implements OnInit {

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
    this.navCtrl.navigateRoot('/confirmacompra');
  }

}
