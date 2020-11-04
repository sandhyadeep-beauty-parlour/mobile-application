import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true
  };
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goServices() {
    this.router.navigate(['home/services']);
  }
  onKnowMore() {
    this.router.navigate(['home/about-us']);
  }
}
