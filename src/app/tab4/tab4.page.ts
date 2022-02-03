import { HttpClient, HttpHeaders } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoginService } from '../services/accounts/login.service';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  name: string = "";
  email: string = "";
  accessToken: string = "";
  tokenatual1: string = "";

  message: any;

  public datastorage: any;
  dadosperfil: any;
  users: any = [];

  token = '';

  api_perfil: any = "https://api.daybee.com.br/profile";

  constructor(
    private navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    private storage: Storage,
    public loginService: LoginService,
    private http: HttpClient
    ) {  
      
    }

  ngOnInit() {
  }

  ionViewWillEnter(){

    this.storage.get('session_storage').then((res_storage)=>{
      this.datastorage = res_storage;
      var tokenatual1 = this.datastorage.accessToken;

      //console.log('TOKEN 1: '+tokenatual1);
      
      this.users = [];
      this.dadosperfil = [];
      this.loadPromo();

    });
 
  }

  loadPromo(){

    let body = {
      
    };
  
    this.loginService.postData(body, 'profile').subscribe(data => {

      this.dadosperfil = data;

      console.log('TOKEN 2: '+this.datastorage.accessToken);
      console.log("DADOS PERFIL:");
      console.log(this.dadosperfil);
      console.log(this.dadosperfil.name);
    });
  
  }

  fechar() {
    this.navCtrl.navigateRoot('/tabs/tab1');
  }

  addinteresse(){
    this.navCtrl.navigateRoot('/novointeresse');
  }

  meusqueri(){
    this.navCtrl.navigateRoot('/tabs/tab1');
  }

  assinar(){
    this.navCtrl.navigateRoot('/tabs/tab3');
  }

  configuracoes(){
    this.navCtrl.navigateRoot('/tabs/configuracoes');
  }

  editarperfil(){
    this.navCtrl.navigateRoot('/editarperfil');
  }

  compartilhar(){
    this.navCtrl.navigateRoot('/configuracoes');
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

}
