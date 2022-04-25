import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { BaseComponent } from '../../base.component'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class NavComponent extends BaseComponent implements OnInit {
  opened = false

  navigation = [
    { link: 'about', label: 'anms.menu.about' },
    { link: 'feature-list', label: 'anms.menu.features' },
    { link: 'examples', label: 'anms.menu.examples' }
  ]

  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'anms.menu.settings' }
  ]

  toggle() {
    this.opened = !this.opened
  }

  ngOnInit(): void {
    this.on('nav:open', (payload: any) => {
      console.log('nav.com === on nav:open===')
      this.toggle()
    })
  }

  close() {
    this.opened = false
  }
}
