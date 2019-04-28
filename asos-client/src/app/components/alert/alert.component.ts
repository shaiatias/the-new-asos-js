import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {AlertService} from '../../services/alerts/alerts.service';


@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {
	message: any;
	private subscription: Subscription;

	constructor(private alertService: AlertService) {
	}

	ngOnInit() {
		this.subscription = this.alertService.getMessage().subscribe(message => {
			this.message = message;
		});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
