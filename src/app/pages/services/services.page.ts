import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../api.service';

@Component({
    selector: 'services',
    templateUrl: './services.page.html',
    styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

    constructor(private router: Router, private adminService: ApiService) {
    }

    amountPurchased = 0;
    selectedServices = 0;
    isRefreshed = false;
    ngOnInit() {
    }


    refreshPage(event) {
        setTimeout(() => {
            this.isRefreshed = !this.isRefreshed;
            this.amountPurchased = 0;
            this.selectedServices = 0;
            event.target.complete();
        }, 1500);
    }

    onBookAppointment() {
        this.router.navigate(['home/schedule-appointment']);
    }

    updateData(data) {
        this.selectedServices = data.selectedServices;
        this.amountPurchased = data.amountPurchased;
    }
}
