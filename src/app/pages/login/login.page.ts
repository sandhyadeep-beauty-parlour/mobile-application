import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { ToastController } from '@ionic/angular';
import {NotificationServiceService} from '../../notification-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder,
              public toastController: ToastController, private notification: NotificationServiceService) { }
  isContinue = false;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      name : new FormControl({value: '', disabled: false}, [
        Validators.required
      ]),
      mobileNumber: new FormControl({value: '', disabled: false}, [
        Validators.required
      ]),
      dob: new FormControl({value: '', disabled: false}, [
        Validators.required
      ]),
      email: new FormControl({value: '', disabled: false}, [
        Validators.required
      ])
    });
  }

  onContinue() {
    this.isContinue = true;
  }

  goToSignup() {
    this.router.navigate(['signup']);
  }


  onLogIn() {
    if (this.loginForm.invalid) {
      this.presentToast('Please fill all the mandatory fields');
      return;
    }
    this.router.navigate(['home/feed']);
  }

  async presentToast(displayMessage) {
    const toast = await this.toastController.create({
      message: displayMessage,
      position: 'top',
      cssClass: 'customToastClass',
      duration: 2000,
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

}
