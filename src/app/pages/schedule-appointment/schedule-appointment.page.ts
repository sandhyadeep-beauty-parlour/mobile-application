import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'schedule-appointment',
  templateUrl: './schedule-appointment.page.html',
  styleUrls: ['./schedule-appointment.page.scss'],
})
export class ScheduleAppointmentPage implements OnInit {

  constructor() { }

  todayDate: any = '';
  today: any = '';
  selectedDate: any = '';
  selectedTimeSlot: any = '';
  daysArray: any = [];
  thisDay: any = '';
  todayMonth: any = '';
  todayYear: any = '';
  weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  timeSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'];
  ngOnInit() {
    this.todayDate = new Date();
    this.today = this.selectedDate = this.todayDate.getDate();
    this.todayMonth = this.todayDate.getMonth();
    this.todayYear = this.todayDate.getFullYear();
    this.thisDay = this.weekDays[this.todayDate.getDay()];
    for (let i = 0; i < 7; i++) {
      this.daysArray.push({
        date: (i > 0) ? new Date(Date.now() + ( 3600 * 1000 * 24 * i)) : this.todayDate,
        showingDate: this.today + i,
        showingDay: this.weekDays[this.todayDate.getDay() + i],
        showingMonth: this.months[this.todayMonth],
        showingShortDay: this.shortDays[this.todayDate.getDay() + i],
      });
    }
    console.log(this.daysArray, 'this.daysArray');
  }

  onChangeDate(day) {
    this.selectedDate = day;
  }

}
