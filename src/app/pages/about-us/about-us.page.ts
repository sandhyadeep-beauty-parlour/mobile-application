import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';
import $ from 'jquery';

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
    spaceBetween: 20
  };
  slideOptsThree = {
    initialSlide: 0,
    slidesPerView: 3
  };
  constructor() {
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
              url: 'assets/sandhyadeep1.png'
            },
            {
              url: 'assets/sandhyadeep2.png'
            },
            {
              url: 'assets/sandhyadeep4.png'
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
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "dots": false,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 1500
  };

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

}
