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
  selector: 'app-dialog-content-document-manage',
  templateUrl: './dialog.content.document.manage.component.html',
  styleUrls: ['./dialog.content.document.manage.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CallApiService]
})
export class DialogContentDocumentManageComponent implements OnInit {
  @Input() actionForm: string;
  @Input() dataObj: any;
  @Output() action = new EventEmitter();

  editorConfig: any = {};
  dateTimeFormat: string;
  dateNow: string = moment().format('DD/MM/YYYY');
  lacaleTH: any;

  ContentForm: FormGroup;
  titleModal: string;

  authenticationToken: any;

  defaultIsPinned: Boolean = false;
  defaultIsActive: Boolean = true;
  isContentCategory: Boolean = false;

  PageLoadData: any = null;
  referenceCode: any = 'ContentType';
  contentTypeCode: any = 'Document';
  contentCategory: any = [];
  lookupContentTypeCode: any = [];
  lookupContentCategoryCode: any = [];

  constructor(
    private Api: CallApiService,
    public modalRef: BsModalRef,
    private ModalService: BsModalService,
    private themeConfig: ConfigService,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    this.LoadConfigEditor();
    this.LoadConfigCalendar();
    this.LoadConfigForm();
    this.LoadSessionPage();
    this.LoadModalHeader();
    this.LoadLookup();
  }

  LoadConfigEditor() {
    this.editorConfig = {};
    this.editorConfig.editable = true;
    this.editorConfig.spellcheck = true;
    this.editorConfig.height = '';
    this.editorConfig.minHeight = '200px';
    this.editorConfig.width = 'auto';
    this.editorConfig.minWidth = '0';
    this.editorConfig.translate = 'yes';
    this.editorConfig.enableToolbar = true;
    this.editorConfig.showToolbar = true;
    this.editorConfig.imageEndPoint = '';
    this.editorConfig.toolbar = true;
    this.editorConfig.placeholder = '';
    this.editorConfig.toolbar = [
      ['bold', 'italic', 'underline', 'strikeThrough', 'superscript', 'subscript'],
      ['fontSize', 'color'],
      ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent'],
      ['cut', 'copy', 'delete', 'removeFormat', 'undo', 'redo'],
      ['paragraph', 'blockquote', 'removeBlockquote', 'horizontalLine', 'orderedList', 'unorderedList'],
      ['link', 'unlink']
    ];
  }

  LoadConfigCalendar() {
    this.dateTimeFormat = this.themeConfig.defaultSettings.dateTimeFormat;
    this.lacaleTH = this.themeConfig.defaultSettings.lacaleTH;
  }

  LoadConfigForm() {
    this.ContentForm = new FormGroup({
      contentTypeCode: new FormControl(this.contentTypeCode, Validators.required),
      contentCategoryCode: new FormControl(''),
      nameTH: new FormControl('', Validators.required),
      shortText: new FormControl('', Validators.required),
      longText: new FormControl(''),
      id: new FormControl(''),
      linkUrl: new FormControl(''),
      description: new FormControl(''),
      isPinned: new FormControl(this.defaultIsPinned , Validators.required),
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
        this.titleModal = 'เพิ่มข้อมูลไฟล์เอกสาร';
        break;
      case 'edit':
        this.titleModal = 'แก้ไขข้อมูลไฟล์เอกสาร';
        this.ContentSelect(this.dataObj, false);
        break;
      case 'view':
        this.titleModal = 'แสดงข้อมูลไฟล์เอกสาร';
        this.ContentSelect(this.dataObj, true);
        break;
      default:
        this.titleModal = 'จัดการข้อมูลไฟล์เอกสาร';
    }
  }

  LoadLookup() {
    this.LookupContentType(this.contentTypeCode);
    this.LookupContentCategory(this.contentTypeCode);
    this.ContentForm.controls['contentTypeCode'].disable();
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

  LookupContentCategory(contentTypeCode: any, contentCategoryCode: any = '') {
    this.lookupContentCategoryCode = [];
    if (this.authenticationToken != null) {
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Content.Category.Inquiry.ByList.ListActive;
      const newEndpoint = endpoint.url.replace('{content_type_code}', this.contentTypeCode);
      this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((response) => {
        if (response != null) {
          this.contentCategory = response;
          this.isContentCategory = (response.length > 0) ? true : false;
          response.forEach(element => {
            this.lookupContentCategoryCode.push({ value: element.code, label: element.nameTH });
          });

          if (contentCategoryCode !== '') {
            this.ContentForm.controls['contentCategoryCode'].setValue(contentCategoryCode);
          }

          if (this.isContentCategory) {
            this.ContentForm.controls['contentCategoryCode'].setValidators([Validators.required]);
          } else {
            this.ContentForm.controls['contentCategoryCode'].clearValidators();
          }

          this.ContentForm.controls['contentCategoryCode'].updateValueAndValidity();
        } else {
          this.lookupContentCategoryCode = [];
        }
      }).catch((error) => {
        this.lookupContentCategoryCode = [];
      });
    } else {
      this.lookupContentCategoryCode = [];
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
      const endpoint = Content.Document.Inquiry.ById;
      let newEndpoint = endpoint.url.replace('{content_id}', contentObj.id);
      newEndpoint = newEndpoint.replace('{content_type_code}', contentObj.contentTypeCode);

      this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((response) => {
        const res = response;
        this.PageLoadData = res;
        this.ContentForm.controls['id'].setValue(res.id);
        this.ContentForm.controls['nameTH'].setValue(res.nameTH);
        this.ContentForm.controls['description'].setValue(res.description);
        this.ContentForm.controls['shortText'].setValue(res.shortText);
        this.ContentForm.controls['longText'].setValue(res.longText);
        this.ContentForm.controls['linkUrl'].setValue(res.linkUrl);
        this.ContentForm.controls['isPinned'].setValue(res.isPinned);
        this.ContentForm.controls['isActive'].setValue(res.isActive);

        if (res.contentType != null) {
          this.ContentForm.controls['contentTypeCode'].setValue(res.contentType.code);
          this.LookupContentType(res.contentType.code);
          this.LookupContentCategory(res.contentType.code);
        }

        if (res.contentCategory != null) {
          this.ContentForm.controls['contentCategoryCode'].setValue(res.contentCategory.code);
          this.LookupContentCategory(res.contentType.code, res.contentCategory.code);
        }

        if (disabled) {
          this.editorConfig.editable = false;
          this.editorConfig.enableToolbar = false;

          this.ContentForm.controls['nameTH'].disable();
          this.ContentForm.controls['description'].disable();
          this.ContentForm.controls['shortText'].disable();
          this.ContentForm.controls['longText'].disable();
          this.ContentForm.controls['linkUrl'].disable();
          this.ContentForm.controls['isPinned'].disable();
          this.ContentForm.controls['isActive'].disable();
        } else {
          this.editorConfig.editable = true;
          this.editorConfig.enableToolbar = true;

          this.ContentForm.controls['nameTH'].enable();
          this.ContentForm.controls['description'].enable();
          this.ContentForm.controls['shortText'].enable();
          this.ContentForm.controls['longText'].enable();
          this.ContentForm.controls['linkUrl'].enable();
          this.ContentForm.controls['isPinned'].enable();
          this.ContentForm.controls['isActive'].enable();
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
        contentParams.contentTypeCode = this.contentTypeCode;
        if (!this.isContentCategory) {
          contentParams.contentCategoryCode = '';
        }
        const authorization = 'Bearer ' + this.authenticationToken;
        let endpoint = null;
        let newEndpoint = null;

        if (this.actionForm === 'add') {
          endpoint = Content.Video.Create;
          newEndpoint = endpoint.url;
        } else if (this.actionForm === 'edit') {
          endpoint = Content.Video.Update;
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
        initialState.description = 'กรุณากรอกข้อมูลไฟล์เอกสารให้ครบ';
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
        this.ContentForm.controls['isPinned'].setValue(this.defaultIsPinned);
        this.LookupContentType(this.contentTypeCode);
        break;
      case 'edit':
        this.ContentSelect(this.dataObj, false);
        break;
      case 'view':
        this.ContentSelect(this.dataObj, true);
        break;
      default:
        this.titleModal = 'จัดการข้อมูลไฟล์เอกสาร';
    }
  }

  contentTypeCodeChange(event: any) {

  }

  contentCategoryCodeChange(event: any) {

  }
}
