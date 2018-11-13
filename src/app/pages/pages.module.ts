import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { InformationComponent } from './information/information.component';
import { ViewInformationComponent } from './information/modals/view-information/view-information.component';
import { AddEditInformationComponent } from './information/modals/add-edit-information/add-edit-information.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginService } from '../providers/login/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsComponent } from './news/news.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { ChangePasswordComponent } from './profile/modals/change-password/change-password.component';
import { ChangeMapComponent } from './profile/modals/change-map/change-map.component';
import { SuspiciousComponent } from './suspicious/suspicious.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent
            }
            ,
            {
                path: 'information',
                component: InformationComponent
            }
            ,
            {
                path: 'login',
                component: LoginComponent
            }
            ,
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'news',
                component: NewsComponent
            },
            {
                path: 'news-detail',
                component: NewsDetailComponent
            },
            {
                path: 'suspicious',
                component: SuspiciousComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        InformationComponent,
        ViewInformationComponent,
        AddEditInformationComponent,
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
        NewsComponent,
        NewsDetailComponent,
        ChangePasswordComponent,
        ChangeMapComponent,
        SuspiciousComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        LoginService
    ],
    exports: [
        PagesComponent
    ],
    entryComponents: [
        ViewInformationComponent,
        AddEditInformationComponent,
        ChangePasswordComponent,
        ChangeMapComponent
    ]
})
export class PagesModule { }
