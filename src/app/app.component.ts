import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers:[
    ScreenOrientation
  ],
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( 
    private storage: Storage,
    public navCtrl: NavController
    ) {

    this.initializeApp();

  }

    initializeApp() {

      this.storage.create();

      this.storage.get('session_storage').then((res)=>{
        if(res == null){
          this.navCtrl.navigateRoot('/login');
        }
        else{
          this.navCtrl.navigateRoot('/tabs/tab1');
        }
      });
  
    }


}



