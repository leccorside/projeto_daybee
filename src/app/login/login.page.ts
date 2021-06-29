import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor() { }

  ngOnInit() {
  }

}
