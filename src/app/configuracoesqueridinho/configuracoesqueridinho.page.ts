import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController, ModalController } from '@ionic/angular';
import { ModalComponent } from '../components/modal/modal.component';

@Component({
  selector: 'app-configuracoesqueridinho',
  templateUrl: './configuracoesqueridinho.page.html',
  styleUrls: ['./configuracoesqueridinho.page.scss'],
})
export class ConfiguracoesqueridinhoPage implements OnInit {

  fromModal: any;

  constructor(
    private navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    private modalController: ModalController
    ) { }

  ngOnInit() {
  }

  fechar() {
    this.navCtrl.back();
  }

  assinar(){
    this.navCtrl.navigateRoot('/tabs/tab3');
  }

  presentear(){
    this.navCtrl.navigateRoot('/tabs/presentear1');
  }

  interesses(){
    this.navCtrl.navigateRoot('/tabs/novointeresse');
  }

  mudarinfo(){
    this.navCtrl.navigateRoot('/tabs/novoqueridinho2');
  }

  datascome(){
    this.navCtrl.navigateRoot('/tabs/datapersonalizada');
  }

  async deletar(){

    const modal = await this.modalController.create({
      component: ModalComponent,
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
