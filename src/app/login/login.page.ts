import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './../services/accounts/login.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, ToastController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

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

  model: User;

  error: any;

  email: string = "";
  password: string = "";

  accessToken: any;

  message: any;

  public datastorage: any;

  credentials = {
    email: 'leccorside@gmail.com',
    password: 'john020469'
  }


  constructor(
    private navCtrl: NavController,
    public toast: ToastController,
    public loginService: LoginService,
    private storage: Storage,
    private loadingCtrl: LoadingController,
    private http: HttpClient,
    private router: Router,
    private alertCtrl: AlertController
    ) {

      this.model = new User();
      this.model.email = 'leccorside@gmail.com';
      this.model.password = 'john020469';

    }

  ngOnInit() {

  }

  esqueci(){
    this.navCtrl.navigateRoot('/esquecisenha');
  }

  cadastro(){
    this.navCtrl.navigateRoot('/cadastro1');
  }

  async login3(){

        let body = {
          email: this.credentials.email,
          password: this.credentials.password
        }

        if(this.credentials.email == ""){
          this.presentToast('E-mail obrigatório!');
        }
        else if(this.credentials.password == ""){
          this.presentToast('Senha obrigatória!');
        }
        else{

        const loader = await this.loadingCtrl.create({
          message: 'Entrando...',
        });
        loader.present();

        this.loginService.postLogin(body).subscribe(res_storage =>{

          if(res_storage){
            this.storage.set('session_storage', res_storage);

            loader.dismiss();
            this.datastorage = res_storage;

            console.log("token_login: "+this.datastorage.accessToken);
            this.navCtrl.navigateRoot('/tabs/tab1');
          }
          else{
            this.presentToast('Erro ao tentar logar.');
            console.log(res_storage);
          }
        
        }, async err => {
          loader.dismiss();
          console.log(err.error.message);
          this.presentToast(err.error.message);
        });
    }

  }

  async presentToast(a){
    const toast = await this.toast.create({
      message: a,
      duration: 3000,
      position: 'bottom',
      cssClass:'toast-bg'
    });
    toast.present();
  }

}

export class User {
  email: string;
  password: string;
}


