import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  constructor(private adminService: ApiService, private router: Router) { }
  productList = [];
  ngOnInit() {
    this.getProducts();
  }

  goToProductDetails(id) {
    this.router.navigate(['home/product-details'], { queryParams: { productId: id }});
  }

  onUpdateCounter(event, index) {

  }

  getProducts() {
    this.adminService.getProducts().subscribe(
        res => this.getProductSuccess(res),
        error => {
          this.adminService.commonError(error);
        }
    );
  }

  getProductSuccess(res) {
    this.productList = res;
  }
}
