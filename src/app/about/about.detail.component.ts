import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-about-detail',
  template: `
    <p>
      about detail Works!
      detail of {{ slug | async }}
    </p>
  `,
  styles: []
})
export class AboutDetailComponent implements OnInit {

  slug;

  constructor(private route: ActivatedRoute) {
    this.slug = route.params.map((p: any) => p.slug);
  }

  ngOnInit() {
  }

}
