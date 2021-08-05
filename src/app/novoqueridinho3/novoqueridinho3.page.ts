import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-novoqueridinho3',
  templateUrl: './novoqueridinho3.page.html',
  styleUrls: ['./novoqueridinho3.page.scss'],
})
export class Novoqueridinho3Page implements OnInit {

  constructor(
    private navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController
 ) {}



  abrircamera(){
    console.log('Camera');
  }

  abrirarquivo(){
    console.log('Galeria');
  }

  proximo(){
    this.navCtrl.navigateRoot('/tabs/novoqueridinho4');
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
