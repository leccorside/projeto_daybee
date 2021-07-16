import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AnimationOptions } from '@ionic/angular/providers/nav-controller';

@Component({
  selector: 'app-datapersonalizada',
  templateUrl: './datapersonalizada.page.html',
  styleUrls: ['./datapersonalizada.page.scss'],
})
export class DatapersonalizadaPage implements OnInit {

  constructor(
    public modalController: ModalController,  
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  ajustarate(){
    this.navCtrl.navigateRoot('/ajusantecedencia');
  }


  fechar() {

    this.modalController.dismiss({
      'dismissed': true
    });

    let animations:AnimationOptions={
      animated: true,
      animationDirection: "back"
    }

    //this.router.navigateByUrl('/novointeresse');

    this.navCtrl.back(animations)
    
    //this.navCtrl.navigateRoot('/novointeresse');

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

}
