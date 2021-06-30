import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro4',
  templateUrl: './cadastro4.page.html',
  styleUrls: ['./cadastro4.page.scss'],
})
export class Cadastro4Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  login(){
    this.navCtrl.navigateRoot('/login');
  }

  proximo(){
    this.navCtrl.navigateRoot('/cadastro3');
  }

}
