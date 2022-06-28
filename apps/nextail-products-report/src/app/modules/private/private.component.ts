import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'nextail-private-component',
  templateUrl: './private.component.html',
})
export class NextailPrivateComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.navigate(['products-report'], { relativeTo: this.route });
  }
}
