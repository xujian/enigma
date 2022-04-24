import browser from 'browser-detect';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  routeAnimations,
  LocalStorageService,
  selectEffectiveTheme,
  AppState
} from './core/core.module';
import { actionSettingsChangeAnimationsPageDisabled } from './core/settings/settings.actions';
import { Bus } from './core/bus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {
  theme$: Observable<string> | undefined;

  constructor(
    private store: Store<AppState>,
    private storageService: LocalStorageService,
    private bus: Bus
  ) {}

  private static isIEorEdgeOrSafari() {
    return ['ie', 'edge', 'safari'].includes(browser().name || '');
  }

  ngOnInit(): void {
    this.storageService.testLocalStorage();
    if (AppComponent.isIEorEdgeOrSafari()) {
      this.store.dispatch(
        actionSettingsChangeAnimationsPageDisabled({
          pageAnimationsDisabled: true
        })
      );
    }

    this.theme$ = this.store.pipe(select(selectEffectiveTheme));
    this.bus.on('nav:open', (payload: any) => {
      console.log('===000===000===Event nav:open', payload);
    });
  }
}
