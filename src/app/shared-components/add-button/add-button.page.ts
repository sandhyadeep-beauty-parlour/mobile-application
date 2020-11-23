import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
    selector: 'add-button',
    templateUrl: './add-button.page.html',
    styleUrls: ['./add-button.page.scss'],
})
export class AddButtonPage {
    counter: any = 0;
    @Output() updateCounter = new EventEmitter<object>();

    constructor() {
    }

    onChange(key) {
        switch (key) {
            case 'plus':
                this.counter = this.counter + 1;
                this.updateCounter.emit(this.counter);
                break;

            case 'minus':
                this.counter = this.counter - 1;
                this.updateCounter.emit(this.counter);
                break;
        }
    }

}
