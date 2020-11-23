import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL: string = environment.baseURLAdminAPIs;
  header: any;
  private country = new BehaviorSubject('');
  currentCountry = this.country.asObservable();

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json'
    });
  }


  getUserRole() {
    return localStorage.getItem('role');
  }

  setHeaderToken() {
    const token = localStorage.getItem('token');
    this.header = new HttpHeaders({Authorization: `Bearer ${token}`});
  }

  getServicesData() {
    const localUrl = 'assets/json_files/services.json';
    return this.http.get(localUrl);
  }

  getMainServiceData() {
    const localUrl = 'assets/json_files/MainServices.json';
    return this.http.get(localUrl);
  }

  getCombos() {
    const localUrl = 'assets/json_files/packages.json';
    return this.http.get(localUrl);
  }

  getCoupons() {
    const localUrl = 'assets/json_files/coupons.json';
    return this.http.get(localUrl);
  }

  getServicePackage() {
    const localUrl = 'assets/json_files/service-packages.json';
    return this.http.get(localUrl);
  }

  getProducts() {
    const localUrl = 'assets/json_files/products.json';
    return this.http.get(localUrl);
  }

  commonError(err) {
    console.log(err);
  }
}
