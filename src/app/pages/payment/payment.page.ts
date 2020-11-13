import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'payments',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  show = '';
  imageUrl = '';
  selectedServices = [];
  serviceAmount = 0;
  constructor() { }

  ngOnInit() {
  }

}
