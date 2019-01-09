import { Component, OnInit, Output, Input, EventEmitter, ViewEncapsulation, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/primeng';
import { SelectItem } from 'primeng/api';
import * as moment from 'moment';

import { ConfigService } from './../../../../../core/config.service';


import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { CookieService } from 'ngx-cookie-service';

import { DialogAlertComponent } from './../../../../../components/dialog-alert/dialog.alert.component';
import { CallApiService } from './../../../../../providers/request.providers';
import { Utility } from './../../../../../api/utility';
import { User } from './../../../../../api/user';
import { Content } from '../../../../../api/content';

@Component({
  selector: 'app-dialog-content-document-type-manage',
  templateUrl: './dialog.content.document.type.manage.component.html',
  styleUrls: ['./dialog.content.document.type.manage.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CallApiService]
})
export class DialogContentDocumentTypeManageComponent implements OnInit {
  @Input() actionForm: string;
  @Input() dataObj: any;
  @Output() action = new EventEmitter();

  dateTimeFormat: string;
  dateNow: string = moment().format('DD/MM/YYYY');
  lacaleTH: any;

  ContentForm: FormGroup;
  titleModal: string;

  referenceCode: any = 'ContentType';

  authenticationToken: any;

  defaultIsActive: Boolean = true;

  lookupContentTypeCode: any = [];

  constructor(
    private Api: CallApiService,
    public modalRef: BsModalRef,
    private ModalService: BsModalService,
    private themeConfig: ConfigService,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    this.LoadConfigCalendar();
    this.LoadConfigForm();
    this.LoadSessionPage();
    this.LoadModalHeader();
    this.LoadLookup();
  }

  LoadConfigCalendar() {
    this.dateTimeFormat = this.themeConfig.defaultSettings.dateTimeFormat;
    this.lacaleTH = this.themeConfig.defaultSettings.lacaleTH;
  }

  LoadConfigForm() {
    this.ContentForm = new FormGroup({
      code: new FormControl(''),
      contentTypeCode: new FormControl('', Validators.required),
      nameTH: new FormControl('', Validators.required),
      nameEN: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      isActive: new FormControl(this.defaultIsActive , Validators.required),
    });
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

  LoadModalHeader() {
    switch (this.actionForm) {
      case 'add':
        this.titleModal = 'เพิ่มข้อมูลหมวดหมู่';
        break;
      case 'edit':
        this.titleModal = 'แก้ไขข้อมูลหมวดหมู่';
        this.ContentSelect(this.dataObj, false);
        break;
      case 'view':
        this.titleModal = 'แสดงข้อมูลหมวดหมู่';
        this.ContentSelect(this.dataObj, true);
        break;
      default:
        this.titleModal = 'จัดการข้อมูลหมวดหมู่';
    }
  }


  LoadLookup() {
    this.LookupContentType();
  }

  LookupContentType(contentTypeCode: any = '') {
    this.lookupContentTypeCode = [];
    if (this.authenticationToken != null) {
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Utility.ReferenceType.Inquiry.ByList.ListActive;
      const newEndpoint = endpoint.url.replace('{reference_code}', this.referenceCode);
      this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((response) => {
        if (response != null) {
          response.forEach(element => {
            this.lookupContentTypeCode.push({ value: element.code, label: element.nameTH });
          });

          if (contentTypeCode !== '') {
            this.ContentForm.controls['contentTypeCode'].setValue(contentTypeCode);
          }
        } else {
          this.lookupContentTypeCode = [];
        }
      }).catch((error) => {
        this.lookupContentTypeCode = [];
      });
    } else {
      this.lookupContentTypeCode = [];
    }
  }

  modalClose() {
    this.modalRef.hide();
    this.action.emit({ status: false, process: false});
  }

  ContentSelect(contentObj: any, disabled: boolean) {
    if (this.authenticationToken != null) {
      const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
      const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Content.Category.Inquiry.ById;
      const newEndpoint = endpoint.url.replace('{content_id}', contentObj.code);

      this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((response) => {
        const res = response;
        this.ContentForm.controls['code'].setValue(res.code);
        this.ContentForm.controls['nameTH'].setValue(res.nameTH);
        this.ContentForm.controls['nameEN'].setValue(res.nameEN);
        this.ContentForm.controls['description'].setValue(res.description);
        this.ContentForm.controls['isActive'].setValue(res.isActive);

        if (res.contentType != null) {
          this.ContentForm.controls['contentTypeCode'].setValue(res.contentType.code);
          this.LookupContentType(res.contentType.code);
        }

        if (disabled) {
          this.ContentForm.controls['code'].disable();
          this.ContentForm.controls['nameTH'].disable();
          this.ContentForm.controls['nameEN'].disable();
          this.ContentForm.controls['description'].disable();
          this.ContentForm.controls['isActive'].disable();
          this.ContentForm.controls['contentTypeCode'].disable();
        } else {
          this.ContentForm.controls['code'].enable();
          this.ContentForm.controls['nameTH'].enable();
          this.ContentForm.controls['nameEN'].enable();
          this.ContentForm.controls['description'].enable();
          this.ContentForm.controls['isActive'].enable();
          this.ContentForm.controls['contentTypeCode'].enable();
        }
      }).catch((error) => {
          initialState.status = 'error';
          initialState.title = error.error.error.message;
          initialState.description = error.error.error.description;
          const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
          bsModalRefObj.content.action.subscribe(result => {
            if (result.status) {
              this.modalRef.hide();
            }
          });
      });
    } else {
      this.modalRef.hide();
    }
  }

  ContentSave() {
    if (this.authenticationToken != null) {
      const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
      const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;

      if (this.ContentForm.valid) {
        const contentParams = this.ContentForm.value;
        const authorization = 'Bearer ' + this.authenticationToken;
        let endpoint = null;
        let newEndpoint = null;

        if (this.actionForm === 'add') {
          endpoint = Content.Category.Create;
          newEndpoint = endpoint.url;
        } else if (this.actionForm === 'edit') {
          endpoint = Content.Category.Update;
          newEndpoint = endpoint.url;
        }

        this.Api.callWithOutScope(newEndpoint, endpoint.method, contentParams,  'Authorization', authorization).then((response) => {
          const res = response;
          if (res.code === 1) {
            initialState.status = 'success';
            initialState.title = res.message;
            initialState.description = res.description;
            const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
            bsModalRefObj.content.action.subscribe(result => {
              if (result.status) {
                this.ContentReset();
                this.action.emit({ status: true, process: true});
              }
            });
          } else {
            initialState.status = 'error';
            initialState.title = res.message;
            initialState.description = res.description;
            const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
            bsModalRefObj.content.action.subscribe(result => {
              if (result.status) {
                this.ContentReset();
              }
            });
          }
        }).catch((error) => {
            initialState.status = 'error';
            initialState.title = error.error.error.message;
            initialState.description = error.error.error.description;
            const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
            bsModalRefObj.content.action.subscribe(result => {
              if (result.status) {
                this.ContentReset();
              }
            });
        });

      } else {
        initialState.status = 'error';
        initialState.title = 'ข้อความจากระบบ';
        initialState.description = 'กรุณากรอกข้อมูลหมวดหมู่ให้ครบ';
        const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
        bsModalRefObj.content.action.subscribe(result => {
          if (result.status) {
            this.ContentReset();
          }
        });
      }
    } else {
      this.modalRef.hide();
    }
  }

  ContentViewToEdit() {
    this.actionForm = 'edit';
    this.ContentSelect(this.dataObj, false);
  }

  ContentReset() {
    switch (this.actionForm) {
      case 'add':
        this.ContentForm.reset();
        this.ContentForm.controls['isActive'].setValue(this.defaultIsActive);
        break;
      case 'edit':
        this.ContentSelect(this.dataObj, false);
        break;
      case 'view':
        this.ContentSelect(this.dataObj, true);
        break;
      default:
        this.titleModal = 'จัดการข้อมูลหมวดหมู่';
    }
  }

  contentTypeCodeChange(event: any) {

  }
}
