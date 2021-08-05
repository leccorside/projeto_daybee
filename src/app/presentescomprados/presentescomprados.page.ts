import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-presentescomprados',
  templateUrl: './presentescomprados.page.html',
  styleUrls: ['./presentescomprados.page.scss'],
})
export class PresentescompradosPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  fechar() {
    this.navCtrl.back();
  }

  assinar(){
    this.navCtrl.navigateRoot('/tabs/tab3');
  }

}
