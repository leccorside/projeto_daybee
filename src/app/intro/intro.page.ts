import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerColumn: 1,
    slidesPerView: 1
  };

  constructor(
    private navCtrl: NavController

  ) { }

  ngOnInit() {
  }

  fecharIntro(){
    this.navCtrl.navigateRoot('/login');
  }

}
