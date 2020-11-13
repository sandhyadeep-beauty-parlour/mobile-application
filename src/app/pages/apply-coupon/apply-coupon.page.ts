import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'apply-coupon',
  templateUrl: './apply-coupon.page.html',
  styleUrls: ['./apply-coupon.page.scss'],
})
export class ApplyCouponPage implements OnInit {

  constructor(private adminService: ApiService, private router: Router) { }
  totalCouponList = [];
  couponList = [];
  selectedCoupon = '';
  addedCoupon = '';
  selectedCouponDetails: any = '';
  ngOnInit() {
    this.getCoupons();
  }


  getCoupons() {
    this.adminService.getCoupons().subscribe(
        res => this.getMainServicesSuccess(res),
        error => {
          this.adminService.commonError(error);
        }
    );
  }

  getMainServicesSuccess(res) {
    this.couponList = res;
    this.totalCouponList = Array.from(res);
  }

  onSelectCoupon(coupon) {
    if (coupon.isChecked) {return;}
    this.selectedCoupon = coupon.couponId.toLowerCase();
    this.addedCoupon = coupon.couponId.toUpperCase();
    this.selectedCouponDetails = coupon;
  }

  filterCoupons() {
    this.couponList = (this.addedCoupon.length > 0) ?
        this.totalCouponList.filter(v => v.couponId.includes(this.addedCoupon)) : this.totalCouponList;
  }

  onApplyCoupon() {
    this.router.navigate(['/home/schedule-appointment']);
  }
}
