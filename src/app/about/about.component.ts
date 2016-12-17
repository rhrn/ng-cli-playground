import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div> about Works!  </div>
    <div>
      <a routerLink="zzz">zzz</a>
      <a routerLink="yyy">yyy</a>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
