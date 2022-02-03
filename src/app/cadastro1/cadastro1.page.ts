import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, NavController, IonSlides, ToastController } from '@ionic/angular';
import { LoginService } from './../services/accounts/login.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-cadastro1',
  templateUrl: './cadastro1.page.html',
  styleUrls: ['./cadastro1.page.scss'],
})

export class Cadastro1Page implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;

  data: any;

  name: string = "";
  phone: string = "";
  photo: string = "";
  email: string = "";
  password: string = "";

  message: any;

  constructor(
    private navCtrl: NavController, 
    public actionSheetCtrl: ActionSheetController,
    public toast: ToastController,
    private loginService: LoginService,
    private storage: Storage,
    ) {

     }

  ngOnInit() {
  }

  login(){
    this.navCtrl.navigateRoot('/login');
  }

  proximo(){
    this.slides.slideNext();
    //this.navCtrl.navigateRoot('/cadastro2');
  }

  cadastrar2(){
   
      let body = {
        name: this.name,
        phone: this.phone,
        photo: this.photo,
        email: this.email,
        password: this.password
      }

      if(this.name == ""){
        this.presentToast('Nome obrigatório!');
      }
      else if(this.email == ""){
        this.presentToast('E-mail obrigatório!');
      }
      else if(this.password == ""){
        this.presentToast('Senha obrigatório!');
      }
      else{

        this.loginService.postCadastro(body).subscribe(res =>{

            if(res){
              this.storage.set('session_storage', res);
              console.log(res);
              this.presentToast('Cadastro efetuado com sucesso!');
              this.navCtrl.navigateRoot('/login');
            }
            else{
              console.log('Erro ao tentar cadastrar, tente novamente mais tarde');
              console.log(res);
            }
          
        }, async err => {
          this.message = err.message;
          this.presentToast('Erro ao tentar cadastrar, tente novamente mais tarde.');
        });

      }

  }

  abrircamera(){
    console.log('Camera');
  }

  abrirarquivo(){
    console.log('Galeria');
  }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Selecione um arquivo',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Câmera',
        icon: 'camera',
        handler: () => {
          this.abrircamera();
        }
      }, {
        text: 'Galeria',
        icon: 'image',
        handler: () => {
          this.abrirarquivo();
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
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

