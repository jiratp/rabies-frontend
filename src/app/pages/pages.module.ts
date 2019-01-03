import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ToggleButtonModule } from 'primeng/togglebutton';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { StepsModule } from 'primeng/steps';
import { MenuItem } from 'primeng/api';

import { StorageServiceModule } from 'ngx-webstorage-service';
import { CookieService } from 'ngx-cookie-service';

import { EsriMapComponent } from './../components/esri-map/esri-map.component';

import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';

import { AnimalInfomationComponent } from './animal-information/animal.information.component';


import { IndividualRegisterComponent } from './information-register/individual-register/individual.register.component';
import { IndividualPetRegisterComponent } from './information-register/individual-register/pet/individual.pet.register.component';

import { ClinicRegisterComponent } from './information-register/clinic-register/clinic.register.component';
import { ClinicIndividualRegisterComponent } from './information-register/clinic-register/individual/clinic.individual.register.component';
import { ClinicPetRegisterComponent } from './information-register/clinic-register/pet/clinic.pet.register.component';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
// import { LoginService } from '../providers/login/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsListComponent } from './news-list/news.list.component';
import { NewsDetailComponent } from './news-detail/news.detail.component';
import { ForgetPasswordComponent } from './forget-password/forget.password.component';
import { RenewPasswordComponent } from './renew-password/renew.password.component';
import { ChangePasswordComponent } from './change-password/change.password.component';
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
/******** End Survey ****** */

/******** Suspicious ****** */
import { AnimalSuspiciousComponent } from './suspicious/animal-suspicious-information/animal.suspicious.component';
/******** End Suspicious ****** */


import { ReportDashboardComponent } from './report-dashboard/report.dashboard.component';
import { ReportHasOwnerComponent } from './report-has-owner/report.hasowner.component';
import { ReportNoOwnerComponent } from './report-no-owner/report.noowner.component';


import { SampleListComponent } from './animal-sample/sample-list/sample.list.component';
import { SampleFormComponent } from './animal-sample/sample-form/sample.form.component';

import { DialogAlertComponent } from './../components/dialog-alert/dialog.alert.component';


/******** Setting ****** */
import { UserManagementComponent } from './setting/user-management/user.management.component';
import { RoleManagementComponent } from './setting/role-management/role.management.component';
import { AccessTransactionComponent } from './setting/access/transaction/access.transaction.component';
import { RegionManagementComponent } from './setting/region-management/region.management.component';
import { ProvinceManagementComponent } from './setting/province-management/province.management.component';
import { DistrictManagementComponent } from './setting/district-management/district.management.component';
import { SubdistrictManagementComponent } from './setting/subdistrict-management/subdistrict.management.component';
import { DepartmentManagementComponent } from './setting/department-management/department.management.component';


import { DialogRoleManageComponent } from './setting/role-management/dialog-role-management/dialog.role.manage.component';
import { DialogRegionManageComponent } from './setting/region-management/dialog-region-management/dialog.region.manage.component';


import { CallApiService } from './../providers/request.providers';


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
                path: 'change-password',
                component: ChangePasswordComponent
            },
            {
                path: 'access-transaction',
                component: AccessTransactionComponent
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
                path: 'sample/animal-sample-list',
                component: SampleListComponent
            },
            {
                path: 'sample/animal-sample-form',
                component: SampleFormComponent
            },
            {
                path: 'information/individual',
                component: IndividualRegisterComponent
            },
            {
                path: 'information/clinic',
                component: ClinicRegisterComponent
            },
            {
                path: 'information/clinic/individual',
                component: ClinicIndividualRegisterComponent
            },
            {
                path: 'information/clinic/individual/register',
                component: ClinicPetRegisterComponent
            },
            {
                path: 'information/individual/register',
                component: IndividualPetRegisterComponent
            },
            {
                path: 'setting/user-management',
                component: UserManagementComponent
            },
            {
                path: 'setting/role-management',
                component: RoleManagementComponent
            },
            {
                path: 'setting/access-transaction',
                component: AccessTransactionComponent
            },
            {
                path: 'setting/region-management',
                component: RegionManagementComponent
            },
            {
                path: 'setting/province-management',
                component: ProvinceManagementComponent
            },
            {
                path: 'setting/district-management',
                component: DistrictManagementComponent
            },
            {
                path: 'setting/subdistrict-management',
                component: SubdistrictManagementComponent
            },
            {
                path: 'setting/department-management',
                component: DepartmentManagementComponent
            },
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
        SampleListComponent,
        SampleFormComponent,
        ProfileComponent,
        NewsListComponent,
        NewsDetailComponent,
        ChangePasswordComponent,
        ForgetPasswordComponent,
        RenewPasswordComponent,
        DialogAlertComponent,
        EsriMapComponent,
        AnimalInfomationComponent,
        SurveyAnimalInformationComponent,
        AnimalSuspiciousComponent,
        IndividualRegisterComponent,
        ClinicRegisterComponent,
        IndividualPetRegisterComponent,
        ClinicIndividualRegisterComponent,
        ClinicPetRegisterComponent,

        UserManagementComponent,
        RoleManagementComponent,
        AccessTransactionComponent,
        RegionManagementComponent,
        ProvinceManagementComponent,
        DistrictManagementComponent,
        SubdistrictManagementComponent,
        DepartmentManagementComponent,

        DialogRoleManageComponent,
        DialogRegionManageComponent,
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
        StepsModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        StorageServiceModule,
        HttpClientModule,
    ],
    providers: [
        CookieService,
        CallApiService,
    ],
    exports: [
        PagesComponent
    ],
    entryComponents: [
        DialogAlertComponent,
        EsriMapComponent,
        AnimalInfomationComponent,
        SurveyAnimalInformationComponent,
        AnimalSuspiciousComponent,

        DialogRoleManageComponent,
        DialogRegionManageComponent,
    ]
})


export class PagesModule { }
