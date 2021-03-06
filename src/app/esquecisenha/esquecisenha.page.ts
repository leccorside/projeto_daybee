import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { LoginService } from '../services/accounts/login.service';

@Component({
  selector: 'app-esquecisenha',
  templateUrl: './esquecisenha.page.html',
  styleUrls: ['./esquecisenha.page.scss'],
})
export class EsquecisenhaPage implements OnInit {

  email: string = "";
  message: any;

  constructor(
    private navCtrl: NavController, 
    public toast: ToastController,
    public loginService: LoginService
    ) { }

  ngOnInit() {
  }

  login(){
    this.navCtrl.navigateRoot('/login');
  }

  codigo(){
    this.navCtrl.navigateRoot('/redefinirsenha');
  }

  recuperar(){
    let body = {
      email: this.email
    }

    if(this.email == ""){
      this.presentToast('Preencha o e-mail');
    }
    else{
        this.loginService.postRecupera(body).subscribe(res =>{

          if(res){
            console.log(res);
            this.navCtrl.navigateRoot('/redefinirsenha');
            this.presentToast('Um email foi enviado com o código para redefinir a sua senha!');
          }
          else{
            console.log('Erro ao tentar logar');
            console.log(res);
            this.presentToast('Usuário não encontrado!');
          }
        
      }, async err => {
        this.message = err.message;
        this.presentToast('Usuário não encontrado!');
      });
    }
  }

  async presentToast(a){
    const toast = await this.toast.create({
      message: a,
      duration: 4000,
      position: 'bottom',
      cssClass:'toast-bg'
    });
    toast.present();
  }

}
