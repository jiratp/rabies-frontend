import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import * as moment from 'moment';
import { LazyLoadEvent } from 'primeng/primeng';

import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { CookieService } from 'ngx-cookie-service';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DialogAlertComponent } from './../../components/dialog-alert/dialog.alert.component';
import { ConfigService } from './../../core/config.service';

import { CallApiService } from './../../providers/request.providers';
import { Utility } from './../../api/utility';
import { User } from './../../api/user';
import { Animal } from './../../api/animal';
import { Survey } from './../../api/survey';

@Component({
  selector: 'app-survey-hasowner',
  templateUrl: './survey.hasowner.component.html',
  styleUrls: ['./survey.hasowner.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CallApiService]
})
export class SurveyHasOwnerComponent implements OnInit {
  breadcrumbParam: any = {};
  ContentForm: FormGroup;
  authenticationToken: any;

  modalRef: BsModalRef;

  // calendar
  dateTimeFormat: string;
  dateNow: string = moment().format('DD/MM/YYYY');
  lacaleTH: any;

  // datatable
  tab: any = 'report-animal-owner-group';
  loading: Boolean;
  totalRecords: number;
  dataTableObj: any = [];
  recordNo: any = 1;
  pages: any;
  pageRows: any;

  actionParams: any = '';

  constructor(
    private Api: CallApiService,
    private ModalService: BsModalService,
    private themeConfig: ConfigService,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private cookieService: CookieService
  ) {

  }

  ngOnInit() {
    /****** dataTable ******/
    this.pages = 1;
    this.totalRecords = 0;
    this.pageRows = 0;
    this.loading = true;


    this.LoadConfigCalendar();
    this.LoadConfigForm();
    this.LoadSessionPage();
    this.LoadData((this.pages - 1));
  }

  /* ALL PAGE CONFIG */
  LoadConfigCalendar() {
    this.dateTimeFormat = this.themeConfig.defaultSettings.dateTimeFormat;
    this.lacaleTH = this.themeConfig.defaultSettings.lacaleTH;
  }

  LoadConfigForm() {
    this.ContentForm = new FormGroup({ });
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

  breadcrumbLink (link: string, params: any = null) {
    if (params !== null) {
      this.router.navigate([link, params]);
    } else {
      this.router.navigate([link]);
    }
  }

  paginate(event) {
    this.pages = (event.first / event.rows);
    this.LoadData((event.first / event.rows));
  }

  LoadContentLazy(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  tabSelected(tab) {
    this.tab = tab;
  }

  /* PAGE ACTION */
  LoadData(pages: any) {
    const self = this;
    if (this.authenticationToken != null) {
      const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
      const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Survey.Round.Inquiry.ByList.ListActive;
      const newEndpoint = endpoint.url;
      this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((response) => {
        const res = response;
        this.pageRows = 100;
        this.totalRecords = res.length;
        this.dataTableObj = res;
      }).catch((error) => {
          initialState.status = 'error';
          initialState.title = error.error.error.message;
          initialState.description = error.error.error.description;
          const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
      });
    }
  }

  ManageSurveyContent(contentObj: any) {
    if (contentObj.code !== '' && contentObj.roundStatus !== 'TIMEOUT') {
      this.router.navigate(['survey/animal-has-owner/owner-information-list', {roundcode: contentObj.code}]);
    }
  }
}
