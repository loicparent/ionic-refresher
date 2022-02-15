import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  array = Array.from(Array(100).keys());

  constructor() {}

  async refresh(event) {
	setTimeout(() => {
	  event.detail.complete();
	}, 2000);
  }

}
