import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Bus } from '../../bus';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class NavComponent implements OnInit {
  opened = false;

  navigation = [
    { link: 'about', label: 'anms.menu.about' },
    { link: 'feature-list', label: 'anms.menu.features' },
    { link: 'examples', label: 'anms.menu.examples' }
  ];

  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'anms.menu.settings' }
  ];

  constructor(private bus: Bus) {}

  toggle() {
    this.opened = !this.opened;
  }

  ngOnInit(): void {
    this.bus.on('nav:open', () => {
      this.toggle();
    });
  }

  close() {
    this.opened = false;
  }
}
