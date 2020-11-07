import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  tab = 'first';
  tabName = 'New Bookings';
  constructor() { }
  onChangeTab(key, tabName) {
    this.tab = key;
    this.tabName = tabName;
  }
  ngOnInit() {
  }

}
