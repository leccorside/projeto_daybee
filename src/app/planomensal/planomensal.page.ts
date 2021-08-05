import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-planomensal',
  templateUrl: './planomensal.page.html',
  styleUrls: ['./planomensal.page.scss'],
})
export class PlanomensalPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  fechar(){
    this.navCtrl.navigateRoot('/tabs/tab1');
  }

  confirmar(){
    this.navCtrl.navigateRoot('/presentear1');
  }

}
