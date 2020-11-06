import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'search-header',
  templateUrl: './search-header-component.page.html',
  styleUrls: ['./search-header-component.page.scss'],
})
export class SearchHeaderComponentPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() { }
  backClicked() {
    this.location.back();
  }

}
