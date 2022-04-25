import { Component, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'
import { BusService, BUS_SERVICE_TOKEN } from './bus'
import { AppInjector } from './core.module'

@Component({
  selector: 'app-base',
  template: ''
})
export class BaseComponent implements OnDestroy {
  protected subscription?: Subscription
  protected bus: BusService = AppInjector.get(BUS_SERVICE_TOKEN)

  constructor() {}

  /**
   * Listen a Event Bus
   * @param event event name to listen
   * @param action callback action
   */
  on(event: string, action: (payload: any) => void) {
    console.log('base.com===///000===000 on', event, this.subscription)
    this.subscription = this.bus.on(event, (payload) => {
      console.log('base.com===000===000 on', event)
      action(payload)
    })
    return this.subscription
  }

  emit(event: string, payload?: any) {
    this.bus.emit(event, payload)
  }

  ngOnDestroy(): void {
    console.log('base.component ngOnDestroy===000===', this.subscription)
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }
}
