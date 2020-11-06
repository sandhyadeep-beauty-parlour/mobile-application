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
  productImages = [
    {
      name: 'Product 1',
      url: 'assets/product1.jpg',
      price: 345,
      discountedPrice: 355,
    },
    {
      name: 'Product 2',
      url: 'assets/product2.jpeg',
      price: 45,
      discountedPrice: 60,
    },
    {
      name: 'Product 3',
      url: 'assets/product3.jpeg',
      price: 126,
      discountedPrice: 150,
    },
    {
      name: 'Product 4',
      url: 'assets/product4.jpeg',
      price: 324,
      discountedPrice: 387,
    },
  ];
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
