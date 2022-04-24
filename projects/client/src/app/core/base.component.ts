import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Bus } from './bus';

@Component({
  selector: 'app-base',
  template: ''
})
export class BaseComponent implements OnDestroy {
  protected subscription?: Subscription;
  protected bus: Bus;

  constructor() {
    this.bus = new Bus();
  }

  /**
   * Listen a Event Bus
   * @param event event name to listen
   * @param action callback action
   */
  on(event: string, action: (payload: any) => void) {
    console.log('base.com===///000===000 on', event, this.subscription);
    this.subscription = this.bus.on(event, (payload) => {
      console.log('base.com===000===000 on', event);
      action(payload);
    });
    return this.subscription;
  }

  ngOnDestroy(): void {
    console.log('base.component ngOnDestroy===000===', this.subscription);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
