import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { Routes, RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { FooterComponent } from './components/footer/footer.component';
import {
  NgbModule,
  NgbTypeaheadModule,
  NgbDropdownModule,
  NgbAlertModule,
  NgbDatepickerModule,
  NgbTabsetModule,
  NgbTooltipModule,
  NgbProgressbarModule
} from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from './core/config.service';
import { Platform } from '@angular/cdk/platform';

const appRoutes: Routes = [
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    NgbTypeaheadModule,
    NgbDropdownModule,
    NgbAlertModule,
    NgbDatepickerModule,
    NgbTabsetModule,
    NgbTooltipModule,
    NgbProgressbarModule
  ],
  providers: [ConfigService, Platform],
  bootstrap: [AppComponent]
})
export class AppModule { }
