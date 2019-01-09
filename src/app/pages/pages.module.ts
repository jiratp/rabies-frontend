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
import { NgxEditorModule } from 'ngx-editor';

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
import { ProvinceManageComponent } from './setting/province-management/province.manage.component';
import { DistrictManagementComponent } from './setting/district-management/district.management.component';
import { SubdistrictManagementComponent } from './setting/subdistrict-management/subdistrict.management.component';

import { DepartmentTypeManageComponent } from './setting/department-management/department-type/department.type.manage.component';
import { DepartmentNameManageComponent } from './setting/department-management/department-name/department.name.manage.component';

import { AnimalTypeManageComponent } from './setting/animal-management/animal-type/animal.type.manage.component';
import { AnimalSpeciesManageComponent } from './setting/animal-management/animal-species/animal.species.manage.component';
import { AnimalSymptomManageComponent } from './setting/animal-management/animal-symptom/animal.symptom.manage.component';
import { SampleObjectiveManageComponent } from './setting/sample-management/sample-objective/sample.objective.manage.component';
import { SurveyRoundManageComponent } from './setting/survey-management/survey-round/survey.round.manage.component';

// tslint:disable-next-line:max-line-length
import { ContentDocumentTypeManageComponent } from './setting/content-management/content-document-type/content.document.type.manage.component';
// tslint:disable-next-line:max-line-length
import { ContentVideoManageComponent } from './setting/content-management/content-video/content.video.manage.component';
// tslint:disable-next-line:max-line-length
import { ContentDocumentManageComponent } from './setting/content-management/content-document/content.document.manage.component';
// tslint:disable-next-line:max-line-length
import { ContentNewsManageComponent } from './setting/content-management/content-news/content.news.manage.component';




import { DialogRoleManageComponent } from './setting/role-management/dialog-role-management/dialog.role.manage.component';
import { DialogRegionManageComponent } from './setting/region-management/dialog-region-management/dialog.region.manage.component';
import { DialogProvinceManageComponent } from './setting/province-management/dialog-province-management/dialog.province.manage.component';


// tslint:disable-next-line:max-line-length
import { DialogDepartmentTypeManageComponent } from './setting/department-management/department-type/dialog-department-type-management/dialog.department.type.manage.component';
// tslint:disable-next-line:max-line-length
import { DialogDepartmentNameManageComponent } from './setting/department-management/department-name/dialog-department-name-management/dialog.department.name.manage.component';

// tslint:disable-next-line:max-line-length
import { DialogAnimalTypeManageComponent } from './setting/animal-management/animal-type/dialog-animal-type-management/dialog.animal.type.manage.component';
// tslint:disable-next-line:max-line-length
import { DialogAnimalSpeciesManageComponent } from './setting/animal-management/animal-species/dialog-animal-species-management/dialog.animal.species.manage.component';
// tslint:disable-next-line:max-line-length
import { DialogAnimalSymptomManageComponent } from './setting/animal-management/animal-symptom/dialog-animal-symptom-management/dialog.animal.symptom.manage.component';
// tslint:disable-next-line:max-line-length
import { DialogSampleObjectiveManageComponent } from './setting/sample-management/sample-objective/dialog-sample-objective-management/dialog.sample.objective.manage.component';
// tslint:disable-next-line:max-line-length
import { DialogSurveyRoundManageComponent } from './setting/survey-management/survey-round/dialog-survey-round-management/dialog.survey.round.manage.component';


// tslint:disable-next-line:max-line-length
import { DialogContentDocumentTypeManageComponent } from './setting/content-management/content-document-type/dialog-content-document-type-management/dialog.content.document.type.manage.component';
// tslint:disable-next-line:max-line-length
import { DialogContentVideoManageComponent } from './setting/content-management/content-video/dialog-content-video-management/dialog.content.video.manage.component';
// tslint:disable-next-line:max-line-length
import { DialogContentDocumentManageComponent } from './setting/content-management/content-document/dialog-content-document-management/dialog.content.document.manage.component';
// tslint:disable-next-line:max-line-length
import { DialogContentNewsManageComponent } from './setting/content-management/content-news/dialog-content-news-management/dialog.content.news.manage.component';


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
                component: ProvinceManageComponent
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
                path: 'setting/department-management/department-type',
                component: DepartmentTypeManageComponent
            },
            {
                path: 'setting/department-management/department-name',
                component: DepartmentNameManageComponent
            },
            {
                path: 'setting/animal-management/animal-type',
                component: AnimalTypeManageComponent
            },
            {
                path: 'setting/animal-management/animal-species',
                component: AnimalSpeciesManageComponent
            },
            {
                path: 'setting/animal-management/animal-symptom',
                component: AnimalSymptomManageComponent
            },
            {
                path: 'setting/sample-management/sample-objective',
                component: SampleObjectiveManageComponent
            },
            {
                path: 'setting/survey-management/survey-round',
                component: SurveyRoundManageComponent
            },
            {
                path: 'setting/content-management/content-category',
                component: ContentDocumentTypeManageComponent
            },
            {
                path: 'setting/content-management/content-video',
                component: ContentVideoManageComponent
            },
            {
                path: 'setting/content-management/content-document',
                component: ContentDocumentManageComponent
            },
            {
                path: 'setting/content-management/content-news',
                component: ContentNewsManageComponent
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
        ProvinceManageComponent,
        DistrictManagementComponent,
        SubdistrictManagementComponent,
        DepartmentTypeManageComponent,
        DepartmentNameManageComponent,

        AnimalTypeManageComponent,
        AnimalSpeciesManageComponent,
        AnimalSymptomManageComponent,
        SampleObjectiveManageComponent,
        SurveyRoundManageComponent,

        ContentDocumentTypeManageComponent,
        ContentVideoManageComponent,
        ContentDocumentManageComponent,
        ContentNewsManageComponent,

        DialogRoleManageComponent,
        DialogRegionManageComponent,
        DialogProvinceManageComponent,

        DialogDepartmentTypeManageComponent,
        DialogDepartmentNameManageComponent,

        DialogAnimalTypeManageComponent,
        DialogAnimalSpeciesManageComponent,
        DialogAnimalSymptomManageComponent,
        DialogSampleObjectiveManageComponent,
        DialogSurveyRoundManageComponent,

        DialogContentDocumentTypeManageComponent,
        DialogContentVideoManageComponent,
        DialogContentDocumentManageComponent,
        DialogContentNewsManageComponent,

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
        NgxEditorModule,
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
        DialogProvinceManageComponent,

        DialogDepartmentTypeManageComponent,
        DialogDepartmentNameManageComponent,
        DialogAnimalTypeManageComponent,
        DialogAnimalSpeciesManageComponent,
        DialogAnimalSymptomManageComponent,
        DialogSampleObjectiveManageComponent,
        DialogSurveyRoundManageComponent,

        DialogContentDocumentTypeManageComponent,
        DialogContentVideoManageComponent,
        DialogContentDocumentManageComponent,
        DialogContentNewsManageComponent,
    ]
})


export class PagesModule { }
