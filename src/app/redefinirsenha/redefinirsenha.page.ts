import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { LoginService } from '../services/accounts/login.service';

@Component({
  selector: 'app-redefinirsenha',
  templateUrl: './redefinirsenha.page.html',
  styleUrls: ['./redefinirsenha.page.scss'],
})
export class RedefinirsenhaPage implements OnInit {

  code: string = "";
  password: string = "";
  message: any;

  constructor(
    private navCtrl: NavController, 
    public toast: ToastController,
    public loginService: LoginService
  ) { }

  ngOnInit() {
  }

  redefinir(){
    let body = {
      code: this.code,
      password: this.password
    }

    if(this.code == ""){
      this.presentToast('Preencha o código');
    }
    if(this.password == ""){
      this.presentToast('Preencha a nova senha');
    }
    else{
        this.loginService.RedefinirSenha(body).subscribe(res =>{

          if(res){
            console.log(res);
            this.navCtrl.navigateRoot('/login');
            this.presentToast('Senha alterada com sucesso!');
          }
          else{
            console.log('Erro ao tentar logar');
            console.log(res);
            this.presentToast('Erro na tentativa ou código incorreto!');
          }
        
      }, async err => {
        this.message = err.message;
        this.presentToast('Usuário não encontrado!');
      });
    }
  }

  login(){
    this.navCtrl.navigateRoot('/login');
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
