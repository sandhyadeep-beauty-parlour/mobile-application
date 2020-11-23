import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ModalPopupPage} from '../../shared-components/modal-popup/modal-popup.page';
import {ModalController} from '@ionic/angular';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true,
    zoom: {
      maxRatio: 3,
    }
  };

  brandsList = [
    {
      name: 'Matrix',
      url: 'assets/matrix.png'
    },
    {
      name: 'Lorial',
      url: 'assets/lorial.png'
    },
    {
      name: 'O3',
      url: 'assets/03.png'
    },
    {
      name: 'Shehnaj',
      url: 'assets/shahnaz-husain.gif'
    },
    {
      name: 'MAC',
      url: 'assets/mac.jpg'
    },
    {
      name: 'olay',
      url: 'assets/olay.png'
    }
  ];

  productImages = [
    {
      name: 'Product 1',
      url: 'assets/product1.jpg',
      price: 345,
      discountedPrice: 355,
      inCart: false,
      addedInCart: 0
    },
    {
      name: 'Product 2',
      url: 'assets/product2.jpeg',
      price: 45,
      discountedPrice: 60,
      inCart: false,
      addedInCart: 0
    },
    {
      name: 'Product 3',
      url: 'assets/product3.jpeg',
      price: 126,
      discountedPrice: 150,
      inCart: false,
      addedInCart: 0
    },
    {
      name: 'Product 4',
      url: 'assets/product4.jpeg',
      price: 324,
      discountedPrice: 387,
      inCart: false,
      addedInCart: 0
    },
  ];

  treatments = [
    {
      name: 'Threading',
      sequence: 1,
      url: 'assets/vector-icons/eyebrow.png',
    },
    {
      name: 'waxing',
      sequence: 2,
      url: 'assets/vector-icons/waxing.png',
    },
    {
      name: 'Haircuts',
      sequence: 3,
      url: 'assets/vector-icons/haircuts.png',
    },
    {
      name: 'Facials',
      sequence: 4,
      url: 'assets/vector-icons/facial.png',
    },
    {
      name: 'Bleach',
      sequence: 5,
      url: 'assets/vector-icons/bleach.png',
    },
    {
      name: 'Hair Treatments',
      sequence: 6,
      url: 'assets/vector-icons/hair-straightener.png',
    },
    {
      name: 'Body Treatments',
      sequence: 7,
      url: 'assets/vector-icons/body-treatments.png',
    },
    {
      name: 'Makeup',
      sequence: 8,
      url: 'assets/vector-icons/makeup.png',
    },
    {
      name: 'Courses',
      sequence: 9,
      url: 'assets/vector-icons/badge.png',
    }
  ];
  packages = [
    {
      id: 1,
      sequence: 1,
      url: 'assets/s1.jpg',
    },
    {
      id: 2,
      sequence: 2,
      url: 'assets/s2.jpg',
    },
    {
      id: 3,
      sequence: 3,
      url: 'assets/s3.jpg',
    },
    {
      id: 4,
      sequence: 4,
      url: 'assets/s4.jpeg',
    }
  ];
  packageList = [];
  constructor(private router: Router, private adminService: ApiService) { }

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

  onClickPackage(id) {
    this.router.navigate(['home/package-details'], { queryParams: { packageId: id }});
  }

  goServices() {
    this.router.navigate(['home/services']);
  }

  onKnowMore() {
    this.router.navigate(['home/about-us']);
  }

  onUpdateCounter(data, index) {
    this.productImages[index].addedInCart = data;
  }
}
