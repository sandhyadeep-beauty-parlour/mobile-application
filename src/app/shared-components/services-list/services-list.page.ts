import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../api.service';

@Component({
  selector: 'service-list',
  templateUrl: './services-list.page.html',
  styleUrls: ['./services-list.page.scss'],
})

export class ServicesListPage implements OnInit, OnChanges {
  @Output() updateAmount = new EventEmitter<object>();
  @Input() isRefreshed;
  constructor(private router: Router, private adminService: ApiService) { }
  show = '';
  show1 = false;
  mainServices = [];
  services = [];
  amountPurchased = 0;
  selectedServices = 0;
  ngOnInit() {
    this.getMainServices();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getMainServices();
  }

  onBookAppointment() {
    this.router.navigate(['home/schedule-appointment']);
  }

  getServices() {
    this.adminService.getServicesData().subscribe(
        res => this.getAllServicesSuccess(res),
        error => {
          this.adminService.commonError(error);
        }
    );
  }

  getMainServices() {
    this.adminService.getMainServiceData().subscribe(
        res => this.getMainServicesSuccess(res),
        error => {
          this.adminService.commonError(error);
        }
    );
  }

  getAllServicesSuccess(res) {
    this.services = res;
    this.mainServices = this.mainServices.map((serv) => {
      serv.services = this.services.filter(v => v.mainServiceId === serv.id);
      serv.show = false;
      return serv;
    });
    console.log(this.mainServices, 'this.mainServices');
  }

  getMainServicesSuccess(res) {
    this.mainServices = res;
    this.getServices();
  }

  onSelectServices(service) {
    service.isChecked = !service.isChecked;
    this.amountPurchased = this.mainServices.reduce((acc, first) => {
      const servicePrice = first.services.reduce((acc2, second) => {
        if (second.isChecked) {
          acc2 = acc2 + parseInt(second.price, 10);
        }
        return acc2;
      }, 0);
      acc = parseInt(acc, 10) + parseInt(servicePrice, 10);
      return acc;
    }, 0);
    this.selectedServices = this.mainServices.reduce((acc, first) => {
      let selectedServices = [];
      selectedServices = first.services.filter(v => v.isChecked);
      acc = acc + selectedServices.length;
      return acc;
    }, 0);
    const data = {amountPurchased: this.amountPurchased, selectedServices: this.selectedServices};
    this.updateAmount.emit(data);
  }

}
