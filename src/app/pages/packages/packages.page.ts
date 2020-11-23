import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api.service';
import {Router} from '@angular/router';
import {ModalPopupPage} from '../../shared-components/modal-popup/modal-popup.page';
import {ModalController} from '@ionic/angular';
import {Location} from '@angular/common';

@Component({
  selector: 'app-messages',
  templateUrl: './packages.page.html',
  styleUrls: ['./packages.page.scss'],
})
export class PackagesPage implements OnInit {
  selectedServices = 0;
  amountPurchased = 0;
  dataReturned: any;

  constructor(private adminService: ApiService, private router: Router, public modalController: ModalController) { }
  slideOpts = {
    initialSlide: 1,
    slidesPerView: 4,
    spaceBetween: 10,
  };
  packageList = [];
  ngOnInit() {
    this.getPackages();
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
  }

  addToCart(index) {
    this.packageList[index].addedInCart = !this.packageList[index].addedInCart;
  }

  onBookAppointment() {
    this.router.navigate(['home/schedule-appointment']);
  }

  showImage(image) {
    this.openModal(image);
  }


  async openModal(image) {
    const modal = await this.modalController.create({
      component: ModalPopupPage,
      componentProps: {
        imageUrl: image
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
      }
    });

    return await modal.present();
  }

  onShowDetails(id) {
    this.router.navigate(['home/package-details'], { queryParams: { packageId: id }});
  }
}
