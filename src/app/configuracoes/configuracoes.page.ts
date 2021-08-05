import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  fechar() {
    this.navCtrl.back();
  }

  assinar(){
    this.navCtrl.navigateRoot('/tabs/tab3');
  }

  meusinteresses(){
    this.navCtrl.navigateRoot('/tabs/meusinteresses');
  }

  presentescomprados(){
    this.navCtrl.navigateRoot('/tabs/presentescomprados');
  }

  politicasprivacidade(){
    this.navCtrl.navigateRoot('/tabs/politicasprivacidade');
  }

  politicasdaybee(){
    this.navCtrl.navigateRoot('/tabs/politicasdaybee');
  }

  conhecadaybee(){
    this.navCtrl.navigateRoot('/tabs/conhecaadaybee');
  }

  ajuda(){
    this.navCtrl.navigateRoot('/tabs/ajuda');
  }

  sair(){
    this.navCtrl.navigateRoot('/login');
  }

  deletarconta(){

  }

}
