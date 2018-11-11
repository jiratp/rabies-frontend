import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { Routes, RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { FooterComponent } from './components/footer/footer.component';

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
