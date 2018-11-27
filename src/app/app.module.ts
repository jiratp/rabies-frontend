import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';

import { SidebarModule } from 'primeng/sidebar';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
// import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { Routes, RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { FooterComponent } from './components/footer/footer.component';


/*
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
*/
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
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PagesModule,
    RouterModule.forRoot(appRoutes),
    SidebarModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [ConfigService, Platform],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
    NgbModule.forRoot(),
    NgbTypeaheadModule,
    NgbDropdownModule,
    NgbAlertModule,
    NgbDatepickerModule,
    NgbTabsetModule,
    NgbTooltipModule,
    NgbProgressbarModule,
*/
