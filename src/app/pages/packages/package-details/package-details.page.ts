import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'package-details',
  templateUrl: './package-details.page.html',
  styleUrls: ['./package-details.page.scss'],
})
export class PackageDetailsPage implements OnInit {

  constructor(private adminService: ApiService, private route: ActivatedRoute) { }
  packageId = null;
  packageList = [];
  singlePackage = {};
  safetyMeasures = [
    'Masks & Gloves worn throughout the service',
    'Complete Sanitization of all the tools used',
    'Low Contact Service',
    '3-day temperature records of beauticians working'
  ];
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true,
    zoom: {
      maxRatio: 3,
    }
  };
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.packageId = params['packageId'];
      this.getPackages();
    });
  }

  getPackages() {
    this.adminService.getServicePackage().subscribe(
        res => this.getServicePackageSuccess(res),
        error => {
          this.adminService.commonError(error);
        }
    );
  }

  getServicePackageSuccess(res) {
    this.packageList = res;
    this.singlePackage = this.packageList.find(v => v.id === parseInt(this.packageId, 10));
  }

  addToCart(id) {
    this.packageList = this.packageList.map((v) => {
      if (v.id === id) {
        v.addedInCart = !v.addedInCart;
      }
    });
  }
}
