import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LazyLoadEvent } from 'primeng/primeng';
import { SelectItem } from 'primeng/api';
import * as moment from 'moment';

import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { CookieService } from 'ngx-cookie-service';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DialogAlertComponent } from './../../../../components/dialog-alert/dialog.alert.component';
import { ConfigService } from './../../../../core/config.service';

import { CallApiService } from './../../../../providers/request.providers';
import { Utility } from './../../../../api/utility';
import { User } from './../../../../api/user';

@Component({
  selector: 'app-access-transaction',
  templateUrl: './access.transaction.component.html',
  styleUrls: ['./access.transaction.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CallApiService]
})
export class AccessTransactionComponent implements OnInit {
  modalRef: BsModalRef;
  searchForm: FormGroup;
  authenticationToken: any;
  memberRole: any;

  dateTimeFormat: string;
  dateNow: string = moment().format('DD/MM/YYYY');
  lacaleTH: any;

  modalASnRef: BsModalRef;

  tab: string;
  loading: Boolean;
  totalRecords: number;
  dataTableObj: any = [];
  pages: any;
  pageRows: any;

  constructor(
    private Api: CallApiService,
    private ModalService: BsModalService,
    private themeConfig: ConfigService,
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private cookieService: CookieService
  ) { }


  ngOnInit() {
    this.tab = 'access-transaction-list';
    /****** dataTable ******/
    this.pages = 1;
    this.totalRecords = 0;
    this.pageRows = 0;
    this.loading = true;

    this.setupFormGroup();
    this.setupCalendar();
    this.LoadSessionPage();
    this.LoadProfileFromSession();
    this.LoadData((this.pages - 1));
  }

  setupFormGroup() {
    this.searchForm = new FormGroup({
    });
  }

  setupCalendar() {
    this.dateTimeFormat = this.themeConfig.defaultSettings.dateTimeFormat;
    this.lacaleTH = this.themeConfig.defaultSettings.lacaleTH;
  }

  LoadProfileFromSession() {
    if (this.authenticationToken != null) {
      const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
      const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = User.Profile.Inquiry;
      this.Api.callWithOutScope(endpoint.url, endpoint.method, endpoint.param, 'Authorization', authorization).then((response) => {
        if (response !== null) {
          this.memberRole = response.userType;
        }
      }).catch((error) => {
        initialState.status = 'error';
        initialState.title = error.error.error.message;
        initialState.description = error.error.error.description;
        this.modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
      });
    }
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

  LoadData(pages: any) {
    if (this.authenticationToken != null) {
      const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
      const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = User.Access.Transaction;
      const newEndpoint = endpoint.url.replace('{page_number}', pages);
      this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((response) => {
        const res = response;
        this.pageRows = res.pageRows;
        this.totalRecords = res.totalRecords;
        this.dataTableObj = res.contentObj;
      }).catch((error) => {
          initialState.status = 'error';
          initialState.title = error.error.error.message;
          initialState.description = error.error.error.description;
          const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
      });
    }
  }

  ManageAnimalSuspicious() {

  }

  paginate(event) {
    this.LoadData((event.first / event.rows));
  }

  tabSelected(tab) {
    this.tab = tab;
  }

  LoadContentLazy(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
