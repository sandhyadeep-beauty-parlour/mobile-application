import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  constructor(private router: Router) { }
  show = true;
  show1 = false;
  ngOnInit() {
  }

  onBookAppointment() {
    this.router.navigate(['home/schedule-appointment']);
  }

}
