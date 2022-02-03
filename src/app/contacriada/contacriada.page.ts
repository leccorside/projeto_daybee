import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contacriada',
  templateUrl: './contacriada.page.html',
  styleUrls: ['./contacriada.page.scss'],
})
export class ContacriadaPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  login(){
    this.navCtrl.navigateRoot('/login');
  }

  proximo(){
    this.navCtrl.navigateRoot('/login');
  }

}
