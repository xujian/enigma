import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core'
import { BaseComponent } from '../../core'

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../core/core.module'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent extends BaseComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS
  releaseButler = 'assets/release-butler.png'

  ngOnInit() {}
}
