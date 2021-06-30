import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro1',
  templateUrl: './cadastro1.page.html',
  styleUrls: ['./cadastro1.page.scss'],
})
export class Cadastro1Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  login(){
    this.navCtrl.navigateRoot('/login');
  }

  proximo(){
    this.navCtrl.navigateRoot('/cadastro2');
  }

}
