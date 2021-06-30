import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  esqueci(){
    this.navCtrl.navigateRoot('/esquecisenha');
  }

  cadastro(){
    this.navCtrl.navigateRoot('/cadastro1');
  }

}
