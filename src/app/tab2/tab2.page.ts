import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
	selector: 'app-tab2',
	templateUrl: 'tab2.page.html',
	styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

	array_short = Array.from(Array(20).keys());
	array_long = Array.from(Array(100).keys());

	currentScroll = 0;
	headerHeight = 0;

	constructor() {}

	async refresh(event) {
		setTimeout(() => {
			event.detail.complete();
		}, 2000);
	}

	scrollEvent(event) {
		this.currentScroll = event ? event.detail.scrollTop : 1;
		this.headerHeight = event ? $(event.target).parent().find('.header').height() : 0; // Because there is a bug with the derect selector of header.

		this.tabsFixedTrigger();
	}

	tabsFixedTrigger(){
		const currentScrollWithHeader = this.currentScroll + this.headerHeight;

		$('.tabs').each((i, e) => {
			const tabsMenu = $(e).find('.tabs__menu__inner');
			const tabsHeight = $(e).outerHeight(true);
			const tabsPositionTopRecalculated = $(e)[0].getBoundingClientRect().top + this.currentScroll;

			if( currentScrollWithHeader >= tabsPositionTopRecalculated && currentScrollWithHeader < tabsPositionTopRecalculated+tabsHeight-tabsMenu.height() ) {
				tabsMenu.css({
					'position': 'fixed',
					'top': this.headerHeight
				});
			} else {
				if( currentScrollWithHeader >= tabsPositionTopRecalculated ) {
					tabsMenu.css({
						'position': 'absolute',
						'top': tabsHeight-tabsMenu.height(),
					});
				} else {
					tabsMenu.css({
						'position': 'relative',
						'top': 0
					});
				}
			}
		});
	}

}
