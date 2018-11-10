import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PagesComponent } from './pages/pages.component';
import { Routes, RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';

const appRoutes: Routes = [
  {
      path: '**',
      redirectTo: 'home'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
