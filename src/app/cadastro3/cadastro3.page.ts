import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro3',
  templateUrl: './cadastro3.page.html',
  styleUrls: ['./cadastro3.page.scss'],
})
export class Cadastro3Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  login(){
    this.navCtrl.navigateRoot('/login');
  }

  proximo(){
    this.navCtrl.navigateRoot('/cadastro4');
  }

}
