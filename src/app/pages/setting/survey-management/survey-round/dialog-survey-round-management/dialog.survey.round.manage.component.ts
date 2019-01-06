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
import { Sample } from './../../../../../api/sample';
import { Survey } from './../../../../../api/survey';
import { Animal } from './../../../../../api/animal';
import { User } from './../../../../../api/user';

@Component({
  selector: 'app-dialog-survey-round-manage',
  templateUrl: './dialog.survey.round.manage.component.html',
  styleUrls: ['./dialog.survey.round.manage.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CallApiService]
})

export class DialogSurveyRoundManageComponent implements OnInit {
  @Input() actionForm: string;
  @Input() dataObj: any;
  @Output() action = new EventEmitter();

  dateTimeFormat: string;
  dateNow: string = moment().format('DD/MM/YYYY');
  lacaleTH: any;

  ContentForm: FormGroup;
  titleModal: string;

  authenticationToken: any;


  defaultIsActive: Boolean = true;
  lookupRoundYear: any = [];

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
      nameTH: new FormControl('', Validators.required),
      nameEN: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      isActive: new FormControl(this.defaultIsActive , Validators.required),
      roundNo: new FormControl('' , Validators.required),
      roundYear: new FormControl('' , Validators.required),
      roundStartDate: new FormControl('' , Validators.required),
      roundEndDate: new FormControl('' , Validators.required),
      code: new FormControl(''),
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
        this.titleModal = 'เพิ่มข้อมูลช่วงเวลาการขึ้นทะเบียนสัตว์';
        break;
      case 'edit':
        this.titleModal = 'แก้ไขข้อมูลช่วงเวลาการขึ้นทะเบียนสัตว์';
        this.ContentSelect(this.dataObj, false);
        break;
      case 'view':
        this.titleModal = 'แสดงข้อมูลช่วงเวลาการขึ้นทะเบียนสัตว์';
        this.ContentSelect(this.dataObj, true);
        break;
      default:
        this.titleModal = 'จัดการข้อมูลช่วงเวลาการขึ้นทะเบียนสัตว์';
    }
  }

  LoadLookup() {
    this.LookupRoundYear();
  }

  LookupRoundYear (roundYear: any = '') {
    for (let i = 2010; i <= 2040; i++) {
      this.lookupRoundYear.push({ value: i, label: i });
    }

    if (roundYear !== '') {
      this.ContentForm.controls['roundYear'].setValue(roundYear);
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
      const endpoint = Survey.Round.Inquiry.ById;
      const newEndpoint = endpoint.url.replace('{content_id}', contentObj.code);
      this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((response) => {
        const res = response;

        this.ContentForm.controls['code'].setValue(res.code);
        this.ContentForm.controls['nameTH'].setValue(res.nameTH);
        this.ContentForm.controls['nameEN'].setValue(res.nameEN);
        this.ContentForm.controls['description'].setValue(res.description);
        this.ContentForm.controls['isActive'].setValue(res.isActive);
        this.ContentForm.controls['roundNo'].setValue(res.roundNo);
        this.ContentForm.controls['roundYear'].setValue(res.roundYear);
        this.ContentForm.controls['roundStartDate'].setValue(res.roundStartDate);
        this.ContentForm.controls['roundEndDate'].setValue(res.roundEndDate);

        if (res.roundYear != null) {
          this.ContentForm.controls['roundYear'].setValue(res.roundYear);
          this.LookupRoundYear(res.roundYear);
        }

        if (disabled) {

          this.ContentForm.controls['roundNo'].disable();
          this.ContentForm.controls['roundYear'].disable();
          this.ContentForm.controls['roundStartDate'].disable();
          this.ContentForm.controls['roundEndDate'].disable();

          this.ContentForm.controls['code'].disable();
          this.ContentForm.controls['nameTH'].disable();
          this.ContentForm.controls['nameEN'].disable();
          this.ContentForm.controls['description'].disable();
          this.ContentForm.controls['isActive'].disable();
        } else {

          this.ContentForm.controls['roundNo'].enable();
          this.ContentForm.controls['roundYear'].enable();
          this.ContentForm.controls['roundStartDate'].enable();
          this.ContentForm.controls['roundEndDate'].enable();

          this.ContentForm.controls['code'].enable();
          this.ContentForm.controls['nameTH'].enable();
          this.ContentForm.controls['nameEN'].enable();
          this.ContentForm.controls['description'].enable();
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
        const authorization = 'Bearer ' + this.authenticationToken;
        let endpoint = null;

        if (this.actionForm === 'add') {
          endpoint = Survey.Round.Create;
        } else if (this.actionForm === 'edit') {
          endpoint = Survey.Round.Update;
        }

        this.Api.callWithOutScope(endpoint.url, endpoint.method, contentParams,  'Authorization', authorization).then((response) => {
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
        initialState.description = 'กรุณากรอกข้อมูลช่วงเวลาการขึ้นทะเบียนสัตว์ให้ครบ';
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
        this.titleModal = 'จัดการข้อมูลช่วงเวลาการขึ้นทะเบียนสัตว์';
    }
  }

  roundYearChange(event: any) {

  }
}
