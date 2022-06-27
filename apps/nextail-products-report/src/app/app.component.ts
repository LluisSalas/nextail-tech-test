import { Component, OnInit } from '@angular/core';
import { ProductsFacade } from '@nextail-tech-test/nextail-store';

@Component({
  selector: 'nextail-tech-test-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private productsFacade: ProductsFacade) {}

  ngOnInit(): void {
    this.productsFacade.getProducts();
    this.productsFacade.products$.subscribe((value) => console.log(value));
  }
}
