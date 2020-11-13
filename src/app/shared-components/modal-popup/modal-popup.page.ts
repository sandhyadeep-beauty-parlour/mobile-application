import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'modal-popup',
  templateUrl: './modal-popup.page.html',
  styleUrls: ['./modal-popup.page.scss'],
})
export class ModalPopupPage implements OnInit {
  modalTitle: string;
  imageUrl: string;

  constructor(
      private modalController: ModalController,
      private navParams: NavParams
  ) { }

  slideOptsTest = {
    zoom: {
      maxRatio: 3,
    }
  };

  ngOnInit() {
    this.imageUrl = this.navParams.data.imageUrl;
    this.modalTitle = this.navParams.data.paramTitle;
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}
