import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	array = Array.from(Array(100).keys());

  constructor() {}

  async refresh(event) {
	  	setTimeout(() => {
			event.detail.complete();
		}, 2000);
    }

}
