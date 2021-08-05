import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pedidoconfirmado',
  templateUrl: './pedidoconfirmado.page.html',
  styleUrls: ['./pedidoconfirmado.page.scss'],
})
export class PedidoconfirmadoPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  fechar(){
    this.navCtrl.navigateRoot('/tabs/tab1');
  }

  confirmar(){
    this.navCtrl.navigateRoot('/presentear1');
  }

}
