import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(
    private navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController
    ) { }

  ngOnInit() {
  }

  fechar() {
    this.navCtrl.navigateRoot('/tabs/tab1');
  }

  addinteresse(){
    this.navCtrl.navigateRoot('/novointeresse');
  }

  meusqueri(){
    this.navCtrl.navigateRoot('/tabs/tab1');
  }

  assinar(){
    this.navCtrl.navigateRoot('/tabs/tab3');
  }

  configuracoes(){
    this.navCtrl.navigateRoot('/tabs/configuracoes');
  }

  editarperfil(){
    this.navCtrl.navigateRoot('/editarperfil');
  }

  compartilhar(){
    this.navCtrl.navigateRoot('/configuracoes');
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
