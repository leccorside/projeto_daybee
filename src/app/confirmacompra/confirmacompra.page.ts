import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-confirmacompra',
  templateUrl: './confirmacompra.page.html',
  styleUrls: ['./confirmacompra.page.scss'],
})
export class ConfirmacompraPage implements OnInit {

  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
  }

  confirmar(){
    this.navCtrl.navigateRoot('/pedidoconfirmado');
  }

  fechar(){
    this.navCtrl.navigateRoot('/tabs/tab1');
  }

}
