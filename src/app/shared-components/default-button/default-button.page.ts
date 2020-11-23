import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
    selector: 'add-button',
    templateUrl: './default-button.page.html',
    styleUrls: ['./default-button.page.scss'],
})
export class DefaultButtonPage {
    counter: any = 0;
    @Output() updateCounter = new EventEmitter<object>();

    constructor() {}
}
