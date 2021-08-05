import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AnimationOptions } from '@ionic/angular/providers/nav-controller';

@Component({
  selector: 'app-presentear1',
  templateUrl: './presentear1.page.html',
  styleUrls: ['./presentear1.page.scss'],
})
export class Presentear1Page implements OnInit {

  constructor(
    public modalController: ModalController,  
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  fechar() {

    this.navCtrl.back();

   /* this.modalController.dismiss({
      'dismissed': true
    });*/

    /*let animations:AnimationOptions={
      animated: true,
      animationDirection: "back"
    }*/

    //this.router.navigateByUrl('/novointeresse');

    //this.navCtrl.back(animations)
    
    //this.navCtrl.navigateRoot('/novointeresse');

  }

  proximo(){
    this.navCtrl.navigateRoot('/presentear2');
  }

  novadata(){
    this.navCtrl.navigateRoot('/datapersonalizada');
  }

}
