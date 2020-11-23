import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  constructor(private adminService: ApiService, private route: ActivatedRoute) { }
  productId = null;
  productList = [];
  singlePackage = {};
  addedInCart = 0;
  safetyMeasures = [
    'Masks & Gloves worn throughout the service',
    'Complete Sanitization of all the tools used',
    'Low Contact Service',
    '3-day temperature records of beauticians working'
  ];
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    zoom: {
      maxRatio: 3,
    }
  };
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.productId = params['productId'];
      this.getPackages();
    });
  }

  getPackages() {
    this.adminService.getProducts().subscribe(
        res => this.getProductsSuccess(res),
        error => {
          this.adminService.commonError(error);
        }
    );
  }

  getProductsSuccess(res) {
    this.productList = res;
    this.singlePackage = this.productList.find(v => v.id === parseInt(this.productId, 10));
  }

  addToCart(id) {
    this.productList = this.productList.map((v) => {
      if (v.id === id) {
        v.addedInCart = !v.addedInCart;
      }
    });
  }

  onUpdateCounter(event) {
    this.addedInCart = event;
  }
}
