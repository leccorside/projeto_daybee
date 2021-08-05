import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-comofunciona',
  templateUrl: './comofunciona.page.html',
  styleUrls: ['./comofunciona.page.scss'],
})
export class ComofuncionaPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  voltar() {
    this.navCtrl.back();
  }

  confirmar(){
    this.navCtrl.navigateRoot('/tabs/presentear1');
  }

}
