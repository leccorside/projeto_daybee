import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-cadastro4',
  templateUrl: './cadastro4.page.html',
  styleUrls: ['./cadastro4.page.scss'],
})
export class Cadastro4Page implements OnInit {

  constructor(
    private navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController
    ) { }

  ngOnInit() {
  }

  login(){
    this.navCtrl.navigateRoot('/login');
  }

  proximo(){
    this.navCtrl.navigateRoot('/contacriada');
  }

  abrircamera(){
    console.log('Camera');
  }

  abrirarquivo(){
    console.log('Galeria');
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


}
