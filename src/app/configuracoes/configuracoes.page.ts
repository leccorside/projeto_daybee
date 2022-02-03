import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {

  public datastorage: any;

  constructor(
    private navCtrl: NavController,  
    private storage: Storage,
    private alertCtrl: AlertController
    ) { 

    
    
  }

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

  async sair(){

    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Deseja mesmo sair?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelado');
          }
        }, {
          text: 'Sair',
          handler: () => {
            this.deslogar();
            this.navCtrl.navigateRoot('/login');
          }
        }
      ]
    });

    await alert.present();
  }

  deslogar(){
    this.storage.remove('session_storage');
    this.storage.clear();
  }

  deletarconta(){

  }

}
