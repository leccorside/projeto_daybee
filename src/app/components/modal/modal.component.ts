import { ModalController, NavController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { Modal2Component } from '../modal2/modal2.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @Input() name: string;
  @Input() type: string;

  fromModal: any;

  constructor(private modalController: ModalController,  private navCtrl: NavController) { }

  ngOnInit() {}

  fecharmodal(){
    this.modalController.dismiss({
      "fromModal": "Subscribed Channel"
    });
  }

  async deletar(){

    this.modalController.dismiss({
      "fromModal": "Subscribed Channel"
    });

    this.navCtrl.navigateRoot('/tabs/tab1');

    const modal = await this.modalController.create({
      component: Modal2Component,
      componentProps: {
        "name" : "Johnathan",
        "type" : "Subscribe"
      },
      cssClass: 'my-modal-class'
    });

    modal.onDidDismiss().then((data: any) => {
      this.fromModal=data;
    });

    return await modal.present();

  }

}
