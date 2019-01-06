import { Component, OnInit, Output, Input, EventEmitter, ViewEncapsulation, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/primeng';
import { SelectItem } from 'primeng/api';
import * as moment from 'moment';

import { ConfigService } from './../../../../core/config.service';

import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { CookieService } from 'ngx-cookie-service';

import { DialogAlertComponent } from './../../../../components/dialog-alert/dialog.alert.component';

import { CallApiService } from './../../../../providers/request.providers';
import { Utility } from './../../../../api/utility';
import { Animal } from './../../../../api/animal';
import { User } from './../../../../api/user';
import { Content } from '../../../../api/content';

// tslint:disable-next-line:max-line-length
import { DialogContentDocumentTypeManageComponent } from './dialog-content-document-type-management/dialog.content.document.type.manage.component';

@Component({
  selector: 'app-content-document-type-manage',
  templateUrl: './content.document.type.manage.component.html',
  styleUrls: ['./content.document.type.manage.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CallApiService]
})
export class ContentDocumentTypeManageComponent implements OnInit {
  modalRef: BsModalRef;
  searchForm: FormGroup;
  authenticationToken: any;

  dateTimeFormat: string;
  dateNow: string = moment().format('DD/MM/YYYY');
  lacaleTH: any;

  modalASnRef: BsModalRef;

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
    this.tab = 'region-management-list';
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
      const endpoint = Content.DocumentType.Inquiry.ByList.List;
      let newEndpoint = endpoint.url.replace('{page_number}', pages);
      newEndpoint = newEndpoint.replace('{animal_type_code}', animalTypeCode);

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

  ActionCreateContent() {
    const initialState = { actionForm: 'add'};
    const dialogFormSetting = this.themeConfig.defaultSettings.dialogFormSetting;
    dialogFormSetting.class = dialogFormSetting.class + ' custom-width';
    const modalASnRef = this.ModalService.show(
      DialogContentDocumentTypeManageComponent,
      Object.assign({}, dialogFormSetting, { initialState })
    );

    modalASnRef.content.action.subscribe(result => {
      if (result.status) {
        this.LoadData((this.pages - 1), 'all');
      }
    });
  }

  ActionViewContent(dataContent: any) {
    const initialState = { actionForm: 'view', dataObj: dataContent};
    const dialogFormSetting = this.themeConfig.defaultSettings.dialogFormSetting;
    dialogFormSetting.class = dialogFormSetting.class + ' custom-width';
    const modalASnRef = this.ModalService.show(
      DialogContentDocumentTypeManageComponent,
      Object.assign({}, dialogFormSetting, { initialState })
    );

    modalASnRef.content.action.subscribe(result => {
      if (result.status) {
        this.LoadData((this.pages - 1), 'all');
      }
    });
  }

  ActionEditContent(dataContent: any) {
    const initialState = { actionForm: 'edit', dataObj: dataContent};
    const dialogFormSetting = this.themeConfig.defaultSettings.dialogFormSetting;
    dialogFormSetting.class = dialogFormSetting.class + ' custom-width';
    const modalASnRef = this.ModalService.show(
      DialogContentDocumentTypeManageComponent,
      Object.assign({}, dialogFormSetting, { initialState })
    );

    modalASnRef.content.action.subscribe(result => {
      if (result.status) {
        this.LoadData((this.pages - 1), 'all');
      }
    });
  }

  ActionDeleteContent(dataContent: any) {
    if (this.authenticationToken != null) {
      const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
      const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;

      initialState.status = 'info';
      initialState.title = 'ข้อความจากระบบ';
      initialState.description = 'คุณต้องการลบข้อมูลนี้ใช่หรือไม่ ?';
      initialState.btnOK.isActive = true;
      initialState.btnCancel.isActive = true;
      const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
      bsModalRefObj.content.action.subscribe(result => {
        initialState.btnCancel.isActive = false;
        if (result.status) {
          const authorization = 'Bearer ' + this.authenticationToken;
          const endpoint = Content.DocumentType.Delete;
          const newEndpoint = endpoint.url.replace('{content_id}', dataContent.code);
          this.Api.callWithOutScope(newEndpoint, endpoint.method, endpoint.param, 'Authorization', authorization).then((response) => {
            const res = response;
            if (res.code === 1) {
              initialState.status = 'success';
              initialState.title = res.message;
              initialState.description = res.description;
              const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
              modalRef.content.action.subscribe(resultObj => {
                if (resultObj.status) {
                  this.LoadData((this.pages - 1), 'all');
                }
              });
            } else {
              initialState.status = 'error';
              initialState.title = res.message;
              initialState.description = res.description;
              const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
              modalRef.content.action.subscribe(resultObj => {
                if (resultObj.status) {
                  this.LoadData((this.pages - 1), 'all');
                }
              });
            }
          }).catch((error) => {
            initialState.status = 'error';
            initialState.title = error.error.error.message;
            initialState.description = error.error.error.description;
            initialState.btnOK.isActive = true;
            initialState.btnCancel.isActive = false;
            const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
            modalRef.content.action.subscribe(resultObj => {
              if (resultObj.status) {
                this.LoadData((this.pages - 1), 'all');
              }
            });
          });
        }
      });
    }
  }
}
