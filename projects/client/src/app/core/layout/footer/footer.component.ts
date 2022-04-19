import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment as env } from '../../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  version = env.versions.app;
  isProd = env.production;
  envName = env.envName;
  year = new Date().getFullYear();

  constructor() {}

  ngOnInit(): void {}
}
