import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectSettingsStickyHeader,
  selectIsAuthenticated,
  authLogin,
  authLogout,
  selectSettingsLanguage
} from '../../core.module';
import { AppState } from '../../core.state';
import { actionSettingsChangeLanguage } from '../../settings/settings.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  navigation = [
    { link: 'about', label: 'anms.menu.about' },
    { link: 'feature-list', label: 'anms.menu.features' },
    { link: 'examples', label: 'anms.menu.examples' }
  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'anms.menu.settings' }
  ];
  languages = ['en', 'de', 'sk', 'fr', 'es', 'pt-br', 'zh-cn', 'he', 'ar'];
  logo = 'assets/logo.svg';
  isAuthenticated$?: Observable<boolean>;
  sticky$?: Observable<boolean>;
  language$?: Observable<string>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.sticky$ = this.store.pipe(select(selectSettingsStickyHeader));
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
  }

  onLoginClick() {
    this.store.dispatch(authLogin());
  }

  onLogoutClick() {
    this.store.dispatch(authLogout());
  }

  onLanguageSelect(event: MatSelectChange) {
    this.store.dispatch(
      actionSettingsChangeLanguage({ language: event.value })
    );
  }
}
