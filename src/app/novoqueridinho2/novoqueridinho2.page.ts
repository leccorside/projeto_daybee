import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-novoqueridinho2',
  templateUrl: './novoqueridinho2.page.html',
  styleUrls: ['./novoqueridinho2.page.scss'],
})
export class Novoqueridinho2Page implements OnInit {

  constructor(
    private navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController) {}

  abrircamera(){
    console.log('Camera');
  }

  abrirarquivo(){
    console.log('Galeria');
  }

  proximo(){
    this.navCtrl.navigateRoot('/tabs/novoqueridinho3');
  }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Selecione um arquivo',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Câmera',
        icon: 'camera',
        handler: () => {
          this.abrircamera();
        }
      }, {
        text: 'Galeria',
        icon: 'image',
        handler: () => {
          this.abrirarquivo();
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  ngOnInit() {
  }

}
