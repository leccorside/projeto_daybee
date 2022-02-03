import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { DetalhesqueridinhosPage } from '../detalhesqueridinhos/detalhesqueridinhos.page';
import { Storage } from '@ionic/storage';
import { LoginService } from '../services/accounts/login.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public datastorage: any;
  accessToken: any;

  credentials = {
    email: 'leccorside@gmail.com',
    password: 'john020469'
  }

  constructor(
    private navCtrl: NavController,
    public modalController: ModalController,
    private storage: Storage,
    public loginService: LoginService
    ) {
       
    }

  /*detalhes(){
    this.navCtrl.navigateRoot('/detalhesqueridinhos');
  }*/

  async detalhes() {
    const modal = await this.modalController.create({
      component: DetalhesqueridinhosPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  detalhes2(){
    this.navCtrl.navigateRoot('/tabs/detalhesqueridinhos');
  }

  presentear(){
    this.navCtrl.navigateRoot('/presentear1');
  }

  async GetQuerid(){

    this.loginService.getQueri().subscribe(res_storage =>{

      if(res_storage){
        this.storage.set('session_storage', res_storage);

        this.datastorage = res_storage;

        console.log("token_login: "+this.datastorage.accessToken);
        this.navCtrl.navigateRoot('/tabs/tab1');
      }
      else{
        console.log(res_storage);
      }
    
    }, async err => {
      console.log(err.error.message);
    });

}

}
