import { Component, OnInit, Inject, ViewEncapsulation} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { CookieService } from 'ngx-cookie-service';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DialogAlertComponent } from './../../components/dialog-alert/dialog.alert.component';
import { ConfigService } from '../../core/config.service';

import { CallApiService } from './../../providers/request.providers';
import { Utility } from './../../api/utility';
import { User } from './../../api/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CallApiService]
})

export class HeaderComponent implements OnInit {
  modalRef: BsModalRef;
  display: Boolean = false;
  authenticationToken: any = null;
  memberRole: any = '';
  userProfile: any = {};
  currentPage: string;
  pageGroup: string;

  constructor(
    private Api: CallApiService,
    private ModalService: BsModalService,
    private themeConfig: ConfigService,
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private cookieService: CookieService
  ) {

    router.events.subscribe((value: any) => {
      if (value.url) {
        let url = value.url.replace('/', '');

        const isParamQuery = url.search('/?/');
        if (isParamQuery > 0) {
          const arrStr = url.split('?');
          url = arrStr[0];
        }
        switch (url) {
          case 'home':
            this.currentPage = 'home';
            this.pageGroup = 'HOME';
            break;
          case 'information/individual':
            this.currentPage = 'information/individual';
            this.pageGroup = 'INFORMATION';
            break;
          case 'information/individual/register':
            this.currentPage = 'information/individual/register';
            this.pageGroup = 'INFORMATION';
            break;
          case 'information/clinic':
            this.currentPage = 'information/clinic';
            this.pageGroup = 'INFORMATION';
            break;
          case 'information/clinic/individual':
            this.currentPage = 'information/clinic/individual';
            this.pageGroup = 'INFORMATION';
            break;
          case 'information/clinic/individual/register':
            this.currentPage = 'information/clinic/individual/register';
            this.pageGroup = 'INFORMATION';
            break;
          case 'survey/dashboard':
            this.currentPage = 'survey/dashboard';
            this.pageGroup = 'SURVEY';
            break;
          case 'survey/animal-has-owner':
            this.currentPage = 'survey/animal-has-owner';
            this.pageGroup = 'SURVEY';
            break;
          case 'survey/animal-no-owner':
            this.currentPage = 'survey/animal-no-owner';
            this.pageGroup = 'SURVEY';
            break;
          case 'survey/animal-has-owner/owner-information':
            this.currentPage = 'survey/animal-has-owner/owner-information';
            this.pageGroup = 'SURVEY';
            break;
          case 'survey/animal-has-owner/owner-information-list':
            this.currentPage = 'survey/animal-has-owner/owner-information-list';
            this.pageGroup = 'SURVEY';
            break;
          case 'survey/animal-no-owner/noowner-information-list':
            this.currentPage = 'survey/animal-no-owner/noowner-information-list';
            this.pageGroup = 'SURVEY';
            break;
          case 'survey/animal-no-owner/noowner-information':
            this.currentPage = 'survey/animal-no-owner/noowner-information';
            this.pageGroup = 'SURVEY';
            break;
          case 'sample/animal-sample-list':
            this.currentPage = 'sample/animal-sample-list';
            this.pageGroup = 'SAMPLE';
            break;
          case 'sample/animal-sample-form':
            this.currentPage = 'sample/animal-sample-form';
            this.pageGroup = 'SAMPLE';
            break;
          case 'suspicious':
            this.currentPage = 'suspicious';
            this.pageGroup = 'SUSPICIOUS';
            break;
          case 'setting/user-management':
            this.currentPage = 'setting/user-management';
            this.pageGroup = 'SITTING';
            break;
          case 'setting/role-management':
            this.currentPage = 'setting/role-management';
            this.pageGroup = 'SITTING';
            break;
          case 'setting/access-transaction':
            this.currentPage = 'setting/access-transaction';
            this.pageGroup = 'SITTING';
            break;
          case 'setting/region-management':
            this.currentPage = 'setting/region-management';
            this.pageGroup = 'SITTING';
            break;
          case 'setting/province-management':
            this.currentPage = 'setting/province-management';
            this.pageGroup = 'SITTING';
            break;
          case 'setting/district-management':
            this.currentPage = 'setting/district-management';
            this.pageGroup = 'SITTING';
            break;
          case 'setting/subdistrict-management':
            this.currentPage = 'setting/subdistrict-management';
            this.pageGroup = 'SITTING';
            break;
          case 'setting/department-management/department-type':
            this.currentPage = 'setting/department-management/department-type';
            this.pageGroup = 'SITTING';
            break;
          case 'setting/department-management/department-name':
            this.currentPage = 'setting/department-management/department-name';
            this.pageGroup = 'SITTING';
            break;
          case 'setting/animal-management/animal-type':
            this.currentPage = 'setting/animal-management/animal-type';
            this.pageGroup = 'SITTING';
            break;
          case 'setting/animal-management/animal-species':
            this.currentPage = 'setting/animal-management/animal-species';
            this.pageGroup = 'SITTING';
            break;
          case 'setting/animal-management/animal-symptom':
            this.currentPage = 'setting/animal-management/animal-symptom';
            this.pageGroup = 'SITTING';
            break;
          case 'setting/sample-management/sample-objective':
            this.currentPage = 'setting/sample-management/sample-objective';
            this.pageGroup = 'SITTING';
            break;
          case 'setting/survey-management/survey-round':
            this.currentPage = 'setting/survey-management/survey-round';
            this.pageGroup = 'SITTING';
            break;
          case 'setting/content-management/content-category':
            this.currentPage = 'setting/content-management/content-category';
            this.pageGroup = 'SITTING';
            break;
          case 'setting/content-management/content-video':
            this.currentPage = 'setting/content-management/content-video';
            this.pageGroup = 'SITTING';
            break;
          case 'setting/content-management/content-document':
            this.currentPage = 'setting/content-management/content-document';
            this.pageGroup = 'SITTING';
            break;
          case 'setting/content-management/content-news':
            this.currentPage = 'setting/content-management/content-news';
            this.pageGroup = 'SITTING';
            break;
          case 'login':
            this.currentPage = 'login';
            this.pageGroup = 'BEFORE_SIGN_ON';
            break;
          case 'register':
            this.currentPage = 'register';
            this.pageGroup = 'BEFORE_SIGN_ON';
            break;
          case 'forget-password':
            this.currentPage = 'forget-password';
            this.pageGroup = 'BEFORE_SIGN_ON';
            break;
          case 'renew-password':
            this.currentPage = 'renew-password';
            this.pageGroup = 'BEFORE_SIGN_ON';
            break;
          case 'profile':
            this.currentPage = 'profile';
            this.pageGroup = 'AFTER_SIGN_ON';
            break;
          case 'change-password':
            this.currentPage = 'change-password';
            this.pageGroup = 'AFTER_SIGN_ON';
            break;
          case 'access-transaction':
            this.currentPage = 'access-transaction';
            this.pageGroup = 'AFTER_SIGN_ON';
            break;
          default:
            this.currentPage = 'home';
        }
      }
    });

  }

  ngOnInit() {
    this.LoadSessionPage();
    this.LoadProfileFromSession();
  }

  LoadSessionPage() {
    const cookieExists: boolean = this.cookieService.check('AuthenticationToken');
    if (cookieExists) {
        const AuthToken = this.cookieService.get('AuthenticationToken');
        this.storage.set('AuthenticationToken', AuthToken);
    }
    this.authenticationToken = this.storage.get('AuthenticationToken');
    if (this.authenticationToken === undefined) {
      this.authenticationToken = null;
    }
  }

  LoadProfileFromSession() {
    if (this.authenticationToken != null) {
      const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
      const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = User.Profile.Inquiry;
      this.Api.callWithOutScope(endpoint.url, endpoint.method, endpoint.param, 'Authorization', authorization).then((response) => {
          this.userProfile = response;
          this.memberRole = response.userType;
      }).catch((error) => {
          initialState.status = 'error';
          initialState.title = error.error.error.message;
          initialState.description = error.error.error.description;
          const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
          modalRef.content.action.subscribe(result => {
            if (result.status) {
              const cookieExists: boolean = this.cookieService.check('AuthenticationToken');
              if (cookieExists) {
                this.cookieService.delete('AuthenticationToken');
              }
              this.storage.remove('AuthenticationToken');
              this.authenticationToken = null;
            }
          });
      });
    }
  }

  navigation(page) {
    this.currentPage = page;
    this.router.navigate([page]);
  }

  toggleSidebar(display) {
   this.display = !display;
  }

  signOut() {
    if (this.authenticationToken != null) {
      const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
      const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;

      initialState.status = 'info';
      initialState.title = 'ข้อความจากระบบ';
      initialState.description = 'คุณต้องการออกจากระบบใช่หรือไม่ ?';
      initialState.btnOK.isActive = true;
      initialState.btnCancel.isActive = true;
      const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
      bsModalRefObj.content.action.subscribe(result => {
        if (result.status) {
          const authorization = 'Bearer ' + this.authenticationToken;
          const endpoint = User.Access.SignOut;
          this.Api.callWithOutScope(endpoint.url, endpoint.method, endpoint.param, 'Authorization', authorization).then((response) => {
            const cookieExists: boolean = this.cookieService.check('AuthenticationToken');
            if (cookieExists) {
              this.cookieService.delete('AuthenticationToken');
            }
            this.storage.remove('AuthenticationToken');
            this.authenticationToken = null;
            window.location.href = 'home';
          }).catch((error) => {
            initialState.status = 'error';
            initialState.title = error.error.error.message;
            initialState.description = error.error.error.description;
            initialState.btnOK.isActive = true;
            initialState.btnCancel.isActive = false;
            this.modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
          });
        }
      });
    }
  }
}


