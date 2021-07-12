import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalhesqueridinhos',
  templateUrl: './detalhesqueridinhos.page.html',
  styleUrls: ['./detalhesqueridinhos.page.scss'],
})
export class DetalhesqueridinhosPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  fechar() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  


}
