import { Component, HostBinding, Renderer2, ElementRef, Inject, OnDestroy, OnInit } from '@angular/core';
import { ConfigService } from './core/config.service';
import { Subscription } from 'rxjs/Subscription';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  onSettingsChanged: Subscription;
  themeConfigs: any;
  @HostBinding('attr.fuse-layout-mode') layoutMode;

  title = 'app';
  constructor(
    private themeConfig: ConfigService,
    private platform: Platform,
    @Inject(DOCUMENT) private document: any) {
    this.onSettingsChanged =
      this.themeConfig.onSettingsChanged
        .subscribe(
          (newSettings) => {
            this.themeConfigs = newSettings;
            this.layoutMode = this.themeConfigs.layout.mode;
          }
        );

    if (this.platform.ANDROID || this.platform.IOS) {
      this.document.body.className += ' is-mobile';
    }
  }
  ngOnInit() {

  }
  ngOnDestroy() {
    this.onSettingsChanged.unsubscribe();
  }
}
