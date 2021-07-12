import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-novoqueridinho4',
  templateUrl: './novoqueridinho4.page.html',
  styleUrls: ['./novoqueridinho4.page.scss'],
})
export class Novoqueridinho4Page implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 500
};

  constructor(
    private navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController
 ) {
  
}

id1(){
  document.getElementById('id1').classList.toggle('spanselec');
}

id2(){
  document.getElementById('id2').classList.toggle('spanselec');
}

id3(){
  document.getElementById('id3').classList.toggle('spanselec');
}

id4(){
  document.getElementById('id4').classList.toggle('spanselec');
}

id5(){
  document.getElementById('id5').classList.toggle('spanselec');
}

id6(){
  document.getElementById('id6').classList.toggle('spanselec');
}

id7(){
  document.getElementById('id7').classList.toggle('spanselec');
}

id8(){
  document.getElementById('id8').classList.toggle('spanselec');
}

id9(){
  document.getElementById('id9').classList.toggle('spanselec');
}

  abrircamera(){
    console.log('Camera');
  }

  abrirarquivo(){
    console.log('Galeria');
  }

  proximo(){
    this.navCtrl.navigateRoot('/tabs');
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
