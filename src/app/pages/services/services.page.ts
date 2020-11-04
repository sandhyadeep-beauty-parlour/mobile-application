import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  constructor() { }
  show = true;
  show1 = false;
  ngOnInit() {
  }

  onBookAppointment() {
    console.log('here');
  }

}
