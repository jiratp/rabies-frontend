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

  authenticationToken: any;


  defaultisProvince: Boolean = false;
  defaultIsDistrict: Boolean = false;
  defaultIsSubdistrict: Boolean = false;
  defaultIsActive: Boolean = true;

  lookupRoleCode: any = [];

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
      roleCode: new FormControl('', Validators.required),
      code: new FormControl(''),
      nameTH: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      isProvince: new FormControl(this.defaultisProvince , Validators.required),
      isDistrict: new FormControl(this.defaultIsDistrict , Validators.required),
      isSubdistrict: new FormControl(this.defaultIsSubdistrict , Validators.required),
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
        this.titleModal = 'เพิ่มข้อมูลหมวดหมู่ของไฟล์';
        break;
      case 'edit':
        this.titleModal = 'แก้ไขข้อมูลหมวดหมู่ของไฟล์';
        this.ContentSelect(this.dataObj, false);
        break;
      case 'view':
        this.titleModal = 'แสดงข้อมูลหมวดหมู่ของไฟล์';
        this.ContentSelect(this.dataObj, true);
        break;
      default:
        this.titleModal = 'จัดการข้อมูลหมวดหมู่ของไฟล์';
    }
  }


  LoadLookup() {
    // this.LookupRole();
  }

  /*
  LookupRole(roleCode: any = '') {
    this.lookupRoleCode = [];
    if (this.authenticationToken != null) {
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Utility.Role.Inquiry.ByList.ListActive;
      this.Api.callWithOutScope(endpoint.url, endpoint.method, {},  'Authorization', authorization).then((response) => {
        if (response != null) {
          response.forEach(element => {
            this.lookupRoleCode.push({ value: element.code, label: element.name });
          });

          if (roleCode !== '') {
            this.ContentForm.controls['roleCode'].setValue(roleCode);
          }
        } else {
          this.lookupRoleCode = [];
        }
      }).catch((error) => {
        this.lookupRoleCode = [];
      });
    } else {
      this.lookupRoleCode = [];
    }
  }
  */

  modalClose() {
    this.modalRef.hide();
    this.action.emit({ status: false, process: false});
  }

  ContentSelect(contentObj: any, disabled: boolean) {
    if (this.authenticationToken != null) {
      const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
      const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Content.DocumentType.Inquiry.ById;
      const newEndpoint = endpoint.url.replace('{content_id}', contentObj.code);

      this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((response) => {
        const res = response;
        this.ContentForm.controls['code'].setValue(res.code);
        this.ContentForm.controls['nameTH'].setValue(res.nameTH);
        this.ContentForm.controls['description'].setValue(res.description);
        this.ContentForm.controls['isProvince'].setValue(res.isProvince);
        this.ContentForm.controls['isDistrict'].setValue(res.isDistrict);
        this.ContentForm.controls['isSubdistrict'].setValue(res.isSubdistrict);
        this.ContentForm.controls['isActive'].setValue(res.isActive);

        if (res.role != null) {
          this.ContentForm.controls['roleCode'].setValue(res.role.code);
          // this.LookupRole(res.role.code);
        }

        if (disabled) {
          this.ContentForm.controls['code'].disable();
          this.ContentForm.controls['nameTH'].disable();
          this.ContentForm.controls['description'].disable();
          this.ContentForm.controls['isProvince'].disable();
          this.ContentForm.controls['isDistrict'].disable();
          this.ContentForm.controls['isSubdistrict'].disable();
          this.ContentForm.controls['isActive'].disable();
          this.ContentForm.controls['roleCode'].disable();
        } else {
          this.ContentForm.controls['code'].enable();
          this.ContentForm.controls['nameTH'].enable();
          this.ContentForm.controls['description'].enable();
          this.ContentForm.controls['isProvince'].enable();
          this.ContentForm.controls['isDistrict'].enable();
          this.ContentForm.controls['isSubdistrict'].enable();
          this.ContentForm.controls['isActive'].enable();
          this.ContentForm.controls['roleCode'].enable();
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
          endpoint = Content.DocumentType.Create;
          newEndpoint = endpoint.url;
        } else if (this.actionForm === 'edit') {
          endpoint = Content.DocumentType.Update;
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
        initialState.description = 'กรุณากรอกข้อมูลหมวดหมู่ของไฟล์ให้ครบ';
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
        this.ContentForm.controls['isProvince'].setValue(this.defaultisProvince);
        this.ContentForm.controls['isDistrict'].setValue(this.defaultIsDistrict);
        this.ContentForm.controls['isSubdistrict'].setValue(this.defaultIsSubdistrict);
        break;
      case 'edit':
        this.ContentSelect(this.dataObj, false);
        break;
      case 'view':
        this.ContentSelect(this.dataObj, true);
        break;
      default:
        this.titleModal = 'จัดการข้อมูลหมวดหมู่ของไฟล์';
    }
  }

  roleCodeChange(event: any) {

  }
}
