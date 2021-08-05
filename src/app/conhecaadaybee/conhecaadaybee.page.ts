import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-conhecaadaybee',
  templateUrl: './conhecaadaybee.page.html',
  styleUrls: ['./conhecaadaybee.page.scss'],
})
export class ConhecaadaybeePage implements OnInit {

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
