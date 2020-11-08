import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'back-logo-header',
  templateUrl: './back-logo-component.page.html',
  styleUrls: ['./back-logo-component.page.scss'],
})
export class BackLogoComponentPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() { }
  backClicked() {
    this.location.back();
  }

}
