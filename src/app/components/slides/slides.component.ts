import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true
  };
  constructor(public router: Router) { }

  ngOnInit() {}
  goToLogin() {
    this.router.navigate(['login']);
  }
}
