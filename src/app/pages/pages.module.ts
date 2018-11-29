import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { ToggleButtonModule } from 'primeng/togglebutton';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';

import { EsriMapComponent } from './../components/esri-map/esri-map.component';

import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';

import { InformationComponent } from './information/information.component';
import { AnimalInfomationComponent } from './animal-information/animal.information.component';

// import { ViewInformationComponent } from './information/modals/view-information/view-information.component';
// import { AddEditInformationComponent } from './information/modals/add-edit-information/add-edit-information.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginService } from '../providers/login/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsListComponent } from './news-list/news.list.component';
import { NewsDetailComponent } from './news-detail/news.detail.component';
import { ForgetPasswordComponent } from './forget-password/forget.password.component';
import { RenewPasswordComponent } from './renew-password/renew.password.component';
import { ChangePasswordComponent } from './change-password/change.password.component';
// import { ChangeMapComponent } from './profile/modals/change-map/change-map.component';
import { SuspiciousComponent } from './suspicious/suspicious.component';

/******** Survey ****** */
import { SurveyDashboardComponent } from './survey-dashboard/survey.dashboard.component';

import { SurveyHasOwnerComponent } from './survey-has-owner/survey.hasowner.component';
import { OwnerInformationListComponent } from './survey-has-owner/owner-information-list/owner.information.list.component';
import { OwnerInformationComponent } from './survey-has-owner/owner-information/owner.information.component';

import { SurveyNoOwnerComponent } from './survey-no-owner/survey.noowner.component';
import { NoOwnerInformationListComponent } from './survey-no-owner/no-owner-information-list/noowner.information.list.component';
import { NoOwnerInformationComponent } from './survey-no-owner/no-owner-information/noowner.information.component';

import { SurveyAnimalInformationComponent } from './survey-no-owner/survey-animal-information/survey.animal.information.component';
import { SurveyAnimalSuspiciousComponent } from './survey-no-owner/survey-animal-suspicious/survey.animal.suspicious.component';

/******** End Survey ****** */

/******** Suspicious ****** */
import { AnimalSuspiciousComponent } from './suspicious/animal-suspicious-information/animal.suspicious.component';
/******** End Suspicious ****** */


import { ReportDashboardComponent } from './report-dashboard/report.dashboard.component';
import { ReportHasOwnerComponent } from './report-has-owner/report.hasowner.component';
import { ReportNoOwnerComponent } from './report-no-owner/report.noowner.component';


import { SimpleDashboardComponent } from './animal-simple-dashboard/simple.dashboard.component';
import { SimpleAnimalListComponent } from './animal-simple-list/simple.animallist.component';

import { LaboratoryDashboardComponent } from './laboratory-dashboard/laboratory.dashboard.component';
import { LaboratorySimplelistComponent } from './laboratory-simple-list/laboratory.simplelist.component';

import { DialogAlertComponent } from './../components/dialog-alert/dialog.alert.component';


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
            },
            {
                path: 'information',
                component: InformationComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'forget-password',
                component: ForgetPasswordComponent
            },
            {
                path: 'renew-password',
                component: RenewPasswordComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'profile/change-password',
                component: ChangePasswordComponent
            },
            {
                path: 'news',
                component: NewsListComponent
            },
            {
                path: 'news-detail',
                component: NewsDetailComponent
            },
            {
                path: 'suspicious',
                component: SuspiciousComponent
            },
            {
                path: 'survey/dashboard',
                component: SurveyDashboardComponent
            },
            {
                path: 'survey/animal-has-owner',
                component: SurveyHasOwnerComponent
            },
            {
                path: 'survey/animal-has-owner/owner-information-list',
                component: OwnerInformationListComponent
            },
            {
                path: 'survey/animal-has-owner/owner-information',
                component: OwnerInformationComponent
            },
            {
                path: 'survey/animal-no-owner',
                component: SurveyNoOwnerComponent
            },
            {
                path: 'survey/animal-no-owner/noowner-information-list',
                component: NoOwnerInformationListComponent
            },
            {
                path: 'survey/animal-no-owner/noowner-information',
                component: NoOwnerInformationComponent
            },
            {
                path: 'report/dashboard',
                component: ReportDashboardComponent
            },
            {
                path: 'report/animal-has-owner',
                component: ReportHasOwnerComponent
            },
            {
                path: 'report/animal-no-owner',
                component: ReportNoOwnerComponent
            },
            {
                path: 'simple/dashboard',
                component: SimpleDashboardComponent
            },
            {
                path: 'simple/animal-simple-list',
                component: SimpleAnimalListComponent
            },
            {
                path: 'laboratory/dashboard',
                component: LaboratoryDashboardComponent
            },
            {
                path: 'laboratory/laboratory-simple-list',
                component: LaboratorySimplelistComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        SuspiciousComponent,
        SurveyDashboardComponent,
        SurveyHasOwnerComponent,
        OwnerInformationComponent,
        OwnerInformationListComponent,
        SurveyNoOwnerComponent,
        NoOwnerInformationListComponent,
        NoOwnerInformationComponent,
        ReportDashboardComponent,
        ReportHasOwnerComponent,
        ReportNoOwnerComponent,
        SimpleDashboardComponent,
        SimpleAnimalListComponent,
        LaboratoryDashboardComponent,
        LaboratorySimplelistComponent,
        ProfileComponent,
        NewsListComponent,
        NewsDetailComponent,
        ChangePasswordComponent,
        ForgetPasswordComponent,
        RenewPasswordComponent,
        DialogAlertComponent,
        EsriMapComponent,
        InformationComponent,
        AnimalInfomationComponent,
        SurveyAnimalInformationComponent,
        SurveyAnimalSuspiciousComponent,
        AnimalSuspiciousComponent,
    ],
    imports: [
        BrowserModule,
        ToggleButtonModule,
        CheckboxModule,
        RadioButtonModule,
        TableModule,
        DropdownModule,
        CalendarModule,
        InputTextareaModule,
        FileUploadModule,
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
        DialogAlertComponent,
        EsriMapComponent,
        AnimalInfomationComponent,
        SurveyAnimalInformationComponent,
        SurveyAnimalSuspiciousComponent,
        AnimalSuspiciousComponent,
    ]
})


/*
        ChangeMapComponent

        ViewInformationComponent,
        AddEditInformationComponent,
    ]
*/

export class PagesModule { }
