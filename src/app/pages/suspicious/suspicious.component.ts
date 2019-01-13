import { Component, OnInit, Output, Input, EventEmitter, ViewEncapsulation, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/primeng';
import { SelectItem } from 'primeng/api';
import * as moment from 'moment';

import { ConfigService } from './../../core/config.service';

import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { CookieService } from 'ngx-cookie-service';

import { DialogAlertComponent } from './../../components/dialog-alert/dialog.alert.component';

import { CallApiService } from './../../providers/request.providers';
import { Utility } from './../../api/utility';
import { Animal } from './../../api/animal';
import { User } from './../../api/user';
import { Content } from './../../api/content';
import { Suspicious } from './../../api/suspicious';

import { AnimalSuspiciousComponent } from './animal-suspicious-information/animal.suspicious.component';


@Component({
  selector: 'app-suspicious',
  templateUrl: './suspicious.component.html',
  styleUrls: ['./suspicious.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CallApiService]
})
export class SuspiciousComponent implements OnInit {
  modalRef: BsModalRef;
  searchForm: FormGroup;
  authenticationToken: any;

  dateTimeFormat: string;
  dateNow: string = moment().format('DD/MM/YYYY');
  lacaleTH: any;

  tab: string;
  loading: Boolean;
  totalRecords: number;
  dataTableObj: any = [];
  recordNo: any = 1;
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
    this.tab = 'suspicious-list';
    /****** dataTable ******/
    this.pages = 1;
    this.totalRecords = 0;
    this.pageRows = 0;
    this.loading = true;

    this.setupFormGroup();
    this.setupCalendar();
    this.LoadSessionPage();
    this.LoadData((this.pages - 1), 'all');
  }

  setupFormGroup() {
    this.searchForm = new FormGroup({
      notifierName: new FormControl(''),
      notifierMobileNumber: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      animalCategory: new FormControl(''),
      provinceNotifier: new FormControl(''),
      districtNotifier: new FormControl(''),
      subDistrictNotifier: new FormControl(''),
    });
  }

  setupCalendar() {
    this.dateTimeFormat = this.themeConfig.defaultSettings.dateTimeFormat;
    this.lacaleTH = this.themeConfig.defaultSettings.lacaleTH;
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

  LoadData(pages: any, animalTypeCode: any) {
    if (this.authenticationToken != null) {
      const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
      const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Suspicious.Inquiry.InformationList;
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

  paginate(event) {
    this.pages = (event.first / event.rows);
    this.LoadData((event.first / event.rows), 'all');
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

  ManageAnimalSuspicious() {
    const initialState = { actionForm: 'add'};
    const dialogFormSetting = this.themeConfig.defaultSettings.dialogFormSetting;
    dialogFormSetting.class = dialogFormSetting.class + ' custom-width';
    this.modalRef = this.ModalService.show(
      AnimalSuspiciousComponent,
      Object.assign({}, dialogFormSetting, { initialState })
    );
  }

  ActionViewContent(dataContent: any) {
    const initialState = { actionForm: 'view', dataObj: dataContent};
    const dialogFormSetting = this.themeConfig.defaultSettings.dialogFormSetting;
    dialogFormSetting.class = dialogFormSetting.class + ' custom-width';

    this.modalRef = this.ModalService.show(
      AnimalSuspiciousComponent,
      Object.assign({}, dialogFormSetting, { initialState })
    );

    this.modalRef.content.action.subscribe(result => {
      if (result.status) {
        this.LoadData((this.pages - 1), 'all');
      }
    });
  }

  ActionEditContent(dataContent: any) {
    const initialState = { actionForm: 'edit', dataObj: dataContent};
    const dialogFormSetting = this.themeConfig.defaultSettings.dialogFormSetting;
    dialogFormSetting.class = dialogFormSetting.class + ' custom-width';
    const modalRef = this.ModalService.show(
      AnimalSuspiciousComponent,
      Object.assign({}, dialogFormSetting, { initialState })
    );

    modalRef.content.action.subscribe(result => {
      if (result.status) {
        this.LoadData((this.pages - 1), 'all');
      }
    });
  }
}
