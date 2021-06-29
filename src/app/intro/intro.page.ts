import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
