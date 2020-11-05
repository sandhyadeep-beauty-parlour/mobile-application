import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage implements OnInit {

  constructor() { }
  imagesData = [
    {
      url: 'assets/work14.jpg',
      likes: 125,
        check: false,
      isLiked: false
    },{
      url: 'assets/work13.jpg',
      likes: 23,
        check: false,
      isLiked: false
    },{
      url: 'assets/work12.jpg',
      likes: 89,
        check: false,
      isLiked: false
    },{
      url: 'assets/work11.jpg',
      likes: 90,
        check: false,
      isLiked: false
    },{
      url: 'assets/work10.jpg',
      likes: 54,
        check: false,
      isLiked: false
    },{
      url: 'assets/work9.jpg',
      likes: 35,
        check: false,
      isLiked: false
    }];

  imagesData1 = [{
      url: 'assets/work10.jpg',
      likes: 76,
      check: false,
      isLiked: false
    },{
      url: 'assets/work7.jpg',
      likes: 54,
      check: false,
      isLiked: false
    },{
      url: 'assets/work6.jpg',
      likes: 43,
      check: false,
      isLiked: false
    },{
      url: 'assets/work3.jpg',
      likes: 23,
      check: false,
      isLiked: false
    },{
      url: 'assets/work2.jpg',
      likes: 18,
      check: false,
      isLiked: false
    },{
      url: 'assets/work15.jpg',
      likes: 76,
      check: false,
      isLiked: false
    },{
      url: 'assets/work16.jpg',
      likes: 54,
      check: false,
      isLiked: false
    }
  ];
  ngOnInit() {
  }

  onLike(list, index) {
    list[index].check = true;
    if (!list[index].isLiked) {
      list[index].likes = parseInt(list[index].likes, 10) + 1;
      list[index].isLiked = true;
    }
    setTimeout(() => {
      list[index].check = false;
    }, 1200);
  }

  onUnlike(list, index) {
    if (list[index].isLiked) {
      list[index].likes = parseInt(list[index].likes, 10) - 1;
      list[index].isLiked = false;
    }
  }

}
