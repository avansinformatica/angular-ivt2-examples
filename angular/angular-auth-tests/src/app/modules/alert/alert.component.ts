import { Component, OnInit, OnDestroy } from '@angular/core'
import { AlertService, Alert } from './alert.service'
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-alert',
  providers: [NgbAlertConfig],
  templateUrl: 'alert.component.html',
  styleUrls: ['alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {
  alert: Alert
  staticAlertClosed = false
  subs: Subscription

  constructor(private alertConfig: NgbAlertConfig, private alertService: AlertService) {
    // customize default values of alerts used by this component tree
    alertConfig.type = 'success'
    alertConfig.dismissible = true
  }

  ngOnInit() {
    // When using 'subscribe()' you MUST always unsubscribe in ngOnDestroy.
    this.subs = this.alertService.getMessage().subscribe(alert => {
      this.alert = alert
      this.staticAlertClosed = false
      // auto close alertbox after some time
      setTimeout(() => (this.staticAlertClosed = true), 6000)
    })
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe()
    }
  }
}
