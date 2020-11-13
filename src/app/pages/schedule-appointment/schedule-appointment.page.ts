import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'schedule-appointment',
  templateUrl: './schedule-appointment.page.html',
  styleUrls: ['./schedule-appointment.page.scss'],
})
export class ScheduleAppointmentPage implements OnInit {

  constructor(private adminService: ApiService, private router: Router) { }

  todayDate: any = '';
  today: any = '';
  selectedDate: any = '';
  selectedTimeSlot: any = '';
  daysArray: any = [];
  thisDay: any = '';
  todayMonth: any = '';
  monthName: any = '';
  todayYear: any = '';
  serviceAmount = 0;
  selectedServicesCount = 0;
  weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  timeSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'];
  selectedServices = [];
  mainServices = [];
  services = [];
  packages = [];
  ngOnInit() {
    this.todayDate = new Date();
    this.today = this.selectedDate = this.todayDate.getDate();
    this.todayMonth = this.todayDate.getMonth();
    this.monthName = this.months[this.todayDate.getMonth()];
    this.todayYear = this.todayDate.getFullYear();
    this.thisDay = this.weekDays[this.todayDate.getDay()];
    console.log(this.todayDate.getDay());
    for (let i = 0; i < 7; i++) {
      const newDate = (i > 0) ? new Date(Date.now() + ( 3600 * 1000 * 24 * i)) : this.todayDate;
      this.daysArray.push({
        date: newDate,
        showingDate: newDate.getDate(),
        showingDay: this.weekDays[newDate.getDay()],
        showingMonth: this.months[this.todayMonth],
        showingShortDay: this.shortDays[newDate.getDay()],
      });
    }
    this.getMainServices();
  }

  onChangeDate(day) {
    this.selectedDate = day;
  }

  onToggleService(service) {
    service.isChecked = !service.isChecked;
    this.serviceAmount = this.services.reduce((acc, first) => {
      if (first.isChecked) {
        acc = acc + parseInt(first.price, 10);
      }
      return acc;
    }, 0);
    this.selectedServicesCount = this.services.filter(v => v.isChecked).length;
    this.selectedServices = this.services.filter(v => v.isChecked);
  }

  onToggleCombo(combo) {
    console.log(combo);
  }

  getServices() {
    this.adminService.getServicesData().subscribe(
        res => this.getAllServicesSuccess(res),
        error => {
          this.adminService.commonError(error);
        }
    );
  }

  getCombos() {
    this.adminService.getCombos().subscribe(
        res => this.getCombosSuccess(res),
        error => {
          this.adminService.commonError(error);
        }
    );
  }

  getCombosSuccess(res) {
    this.packages = res;
    this.packages = this.packages.map((val) => {
      val.servicesList = this.services.filter(v => val.services.includes(v.id));
      val.comboName = val.servicesList.map(v => v.serviceName).join(' + ');
      val.actualPrice = val.servicesList.reduce((acc, first) => {
        acc = acc + parseInt(first.price, 10);
        return acc;
      }, 0);
      val.discountedPrice =  parseInt(val.actualPrice, 10) - parseInt(val.discount, 10);
      return val;
    });
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
    this.services = this.services.map((serv) => {
      serv.mainServiceName = this.mainServices.find(v => v.id === serv.mainServiceId).name;
      return serv;
    });
    this.getCombos();
  }

  getMainServicesSuccess(res) {
    this.mainServices = res;
    this.getServices();
  }

  onBookAppointment() {
    this.router.navigate(['home/payments']);
  }
}
