import { Component, OnInit } from '@angular/core';
import { NextailProductsApi } from '@nextail-tech-test/nextail-api';

@Component({
  selector: 'nextail-tech-test-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private productsApi: NextailProductsApi) {}

  ngOnInit(): void {
    this.productsApi.getProducts().subscribe((value) => console.log(value));
  }
}
