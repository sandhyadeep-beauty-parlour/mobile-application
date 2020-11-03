import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login-image-background.page.html',
  styleUrls: ['./login-image-background.page.scss'],
})
export class LoginImageBackgroundPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToSignup() {
    this.router.navigate(['signup']);
  }


  onLogIn() {
    this.router.navigate(['home/feed']);
  }

}
