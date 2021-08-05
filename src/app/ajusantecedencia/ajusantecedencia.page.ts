import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AnimationOptions } from '@ionic/angular/providers/nav-controller';

@Component({
  selector: 'app-ajusantecedencia',
  templateUrl: './ajusantecedencia.page.html',
  styleUrls: ['./ajusantecedencia.page.scss'],
})
export class AjusantecedenciaPage implements OnInit {

  

  constructor(
    public modalController: ModalController,  
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  fechar() {

    this.navCtrl.back()
    
  }

  novadata(){
    this.navCtrl.navigateRoot('/tabs/datapersonalizada');
  }

}
