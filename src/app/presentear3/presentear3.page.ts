import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AnimationOptions } from '@ionic/angular/providers/nav-controller';

@Component({
  selector: 'app-presentear3',
  templateUrl: './presentear3.page.html',
  styleUrls: ['./presentear3.page.scss'],
})
export class Presentear3Page implements OnInit {

  constructor(
    public modalController: ModalController,  
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  
  voltar() {
    this.navCtrl.back();
  }

  proximo(){
    this.navCtrl.navigateRoot('/meuscartoes');
  }

  fechar(){
    this.navCtrl.navigateRoot('/tabs/tab1');
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

}
