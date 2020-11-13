import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides, ModalController} from '@ionic/angular';
import $ from 'jquery';
import {ModalPopupPage} from '../../shared-components/modal-popup/modal-popup.page';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true
  };
  show = true;
  selectedMenu = 'about_us';
  amountPurchased = 0;
  selectedServices = 0;

  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides;
  @ViewChild('slideWithNav3', { static: false }) slideWithNav3: IonSlides;

  sliderOne: any;
  sliderTwo: any;
  sliderThree: any;

  //Configuration for each Slider
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 2,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,
    longSwipes: true,
    autoplay: true,
  };
  slideOptsThree = {
    initialSlide: 0,
    slidesPerView: 3
  };
  constructor(public modalController: ModalController, private router: Router, private location: Location) {
    //Item object for Nature
    this.sliderOne =
        {
          isBeginningSlide: true,
          isEndSlide: false,
          slidesItems: [
            {
              id: 995
            },
            {
              id: 925
            },
            {
              id: 940
            },
            {
              id: 943
            },
            {
              id: 944
            }
          ]
        };
    //Item object for Food
    this.sliderTwo =
        {
          isBeginningSlide: true,
          isEndSlide: false,
          slidesItems: [
            {
              url: 'assets/deepaa1.jpg'
            },
            {
              url: 'assets/deepaa2.jpg'
            },
            {
              url: 'assets/deepaa3.jpg'
            },
            {
              url: 'assets/deepaa4.jpg'
            },
            {
              url: 'assets/deepaa6.jpg'
            }
          ]
        };
    //Item object for Fashion
    this.sliderThree =
        {
          isBeginningSlide: true,
          isEndSlide: false,
          slidesItems: [
            {
              id: 643
            },
            {
              id: 532
            },
            {
              id: 232
            },
            {
              id: 874
            },
            {
              id: 193
            }
          ]
        };
  }

  slides = [
    {img: "assets/work1.jpg"},
    {img: "assets/work2.jpg"},
    {img: "assets/work3.jpg"},
    {img: "assets/work6.jpg"},
    {img: "assets/work7.jpg"}
  ];
  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "dots": false,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 1500
  };

  dataReturned: any;
  async openModal() {
    const modal = await this.modalController.create({
      component: ModalPopupPage,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

  onSelectMenu(key) {
    this.selectedMenu = key;
  }
  ngOnInit() {
  }

  onBookAppointment() {
    console.log('here');
  }


  //Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }


  //Call methods to check if slide is first or last to enable disbale navigation
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((isTrue) => {
      object.isEndSlide = isTrue;
    });
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

  onSeeAllPortfolios() {
    this.router.navigate(['home/portfolio']);
  }

  backClicked() {
    this.location.back();
  }

  updateData(data) {
    this.selectedServices = data.selectedServices;
    this.amountPurchased = data.amountPurchased;
  }
}
