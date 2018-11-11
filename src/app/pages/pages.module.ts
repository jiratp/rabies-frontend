import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { InformationComponent } from './information/information.component';
import { ViewInformationComponent } from './information/modals/view-information/view-information.component';
import { AddEditInformationComponent } from './information/modals/add-edit-information/add-edit-information.component';

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
        ]
    }
];

@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        InformationComponent,
        ViewInformationComponent,
        AddEditInformationComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    exports: [
        PagesComponent
    ],
    entryComponents: [
        ViewInformationComponent,
        AddEditInformationComponent
    ]
})
export class PagesModule { }
