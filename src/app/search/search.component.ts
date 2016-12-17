import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
    <p>
      search Works! {{ message }}
      <input #searchInput type="text" (keyup)="searchOutput.emit({ text: searchInput.value })">
      <button (click)="search(searchInput.value)">Search</button>
    </p>
  `,
  styles: []
})
export class SearchComponent implements OnInit {

  @Input() message;
  @Output() searchOutput = new EventEmitter();

  constructor() { }

  search(value) {
    console.log('-', value)
  }

  ngOnInit() {
  }

}
