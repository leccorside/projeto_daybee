import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.component.html',
  styleUrls: ['./modal2.component.scss'],
})
export class Modal2Component implements OnInit {

  fromModal: any;

  constructor(private modalController: ModalController, private navCtrl: NavController) { }

  ngOnInit() {}

  fecharmodal(){
    this.modalController.dismiss({
      "fromModal": "Subscribed Channel"
    });

    this.navCtrl.navigateRoot('/tabs/tab1');
  }

}
