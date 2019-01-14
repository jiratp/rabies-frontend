import { Component, OnInit, Output, Input, EventEmitter, ViewEncapsulation, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import * as moment from 'moment';
import { LazyLoadEvent } from 'primeng/primeng';

import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { CookieService } from 'ngx-cookie-service';

import { DialogAlertComponent } from './../../../components/dialog-alert/dialog.alert.component';
import { ConfigService } from './../../../core/config.service';

import { CallApiService } from './../../../providers/request.providers';
import { Utility } from './../../../api/utility';
import { User } from './../../../api/user';
import { Animal } from './../../../api/animal';
import { Registration } from './../../../api/registration';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-survey-animal-information.',
  templateUrl: './survey.animal.information.component.html',
  styleUrls: ['./survey.animal.information.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CallApiService]
})
export class SurveyAnimalInformationComponent implements OnInit {
    @Input() actionFormObj: string;
    @Input() moduleContent: any;
    @Input() dataObj: any;
    @Output() action = new EventEmitter();

    ContentForm: FormGroup;
    authenticationToken: any;
    titleModal: string;
    animalCode: any = '';

    animalTypeOtherBoolean: Boolean = false;

    animalTypeList: any = [];

    lookupAnimalType: any = [];

    // UPLOAD CONFIG
    uploadedFiles: any[] = [];
    fileToUpload: File = null;

    // calendar
    dateTimeFormat: string;
    dateNow: string = moment().format('DD/MM/YYYY');
    lacaleTH: any;

    constructor(
      private Api: CallApiService,
      public modalRef: BsModalRef,
      public ModalService: BsModalService,
      private themeConfig: ConfigService,
      private router: Router,
      @Inject(SESSION_STORAGE) private storage: StorageService,
      private cookieService: CookieService
    ) { }

    ngOnInit() {

      this.LoadConfigCalendar();
      this.LoadConfigForm();
      this.setupModalHeader();
      this.LoadSessionPage();
      this.LoadLookup();
      this.LoadAnimalCode();
    }
    setupModalHeader() {
      switch (this.actionFormObj) {
        case 'add':
          this.titleModal = 'เพิ่มข้อมูลสัตว์';
          break;
        case 'edit':
          this.titleModal = 'แก้ไขข้อมูลสัตว์';
          break;
        default:
          this.titleModal = 'จัดการข้อมูลสัตว์';
      }
    }
    LoadConfigCalendar() {
      this.dateTimeFormat = this.themeConfig.defaultSettings.dateTimeFormat;
      this.lacaleTH = this.themeConfig.defaultSettings.lacaleTH;
    }
    LoadConfigForm() {
      this.ContentForm = new FormGroup({
        animalTypeCode: new FormControl('', Validators.required),
        animalTypeOther: new FormControl(''),
        animalAmount: new FormControl(''),
        animalVaccineAmount: new FormControl(''),
        animalCastratedAmount: new FormControl(''),
        code: new FormControl(''),
        action: new FormControl(''),
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
    LoadLookup() {
      this.LookupAnimalType();
    }

    /* LOOK UP */
    LookupAnimalType(animalTypeCode: any = '') {
      this.lookupAnimalType = [];
      if (this.animalTypeList.length === 0) {
        if (this.authenticationToken != null) {
          const authorization = 'Bearer ' + this.authenticationToken;
          const endpoint = Animal.Type.Inquiry.ByList.ListActive;
          this.Api.callWithOutScope(endpoint.url, endpoint.method, {},  'Authorization', authorization).then((response) => {
            if (response != null) {
              this.animalTypeList = response;
              response.forEach(element => {
                this.lookupAnimalType.push({ value: element.code, label: element.nameTH });
              });
              if (animalTypeCode !== '') {
                this.ContentForm.controls['animalTypeCode'].setValue(animalTypeCode);
              }
            } else {
              this.lookupAnimalType = [];
            }
          }).catch((error) => {
            this.lookupAnimalType = [];
          });
        } else {
          this.lookupAnimalType = [];
        }
      } else {
        this.animalTypeList.forEach(element => {
          this.lookupAnimalType.push({ value: element.code, label: element.nameTH });
        });
        if (animalTypeCode !== '') {
          this.ContentForm.controls['animalTypeCode'].setValue(animalTypeCode);
        }
      }
    }
    LookupAnimalTypeCodeChange(event: any) {
      if (this.animalTypeList.length > 0) {
        const findObj = this.animalTypeList.find(obj => obj.code === event.value);
        this.animalTypeOtherBoolean = findObj.hasExtValue;
      }
    }

    modalClose() {
      this.action.emit({status: false});
      this.modalRef.hide();
    }

    /* ==== END LOOKUP ===== */

  LoadAnimalCode () {
    if (this.actionFormObj === 'edit') {
      if (this.moduleContent.method === 'survey-on-owner') {
        this.ContentForm.controls['animalTypeCode'].setValue(this.moduleContent.recordObj.animalTypeCode);
        this.ContentForm.controls['animalTypeOther'].setValue(this.moduleContent.recordObj.animalTypeOther);
        if (this.moduleContent.recordObj.animalAmount !== 0) {
          this.ContentForm.controls['animalAmount'].setValue(this.moduleContent.recordObj.animalAmount);
        }
        if (this.moduleContent.recordObj.animalVaccineAmount !== 0) {
          this.ContentForm.controls['animalVaccineAmount'].setValue(this.moduleContent.recordObj.animalVaccineAmount);
        }
        if (this.moduleContent.recordObj.animalCastratedAmount !== 0) {
          this.ContentForm.controls['animalCastratedAmount'].setValue(this.moduleContent.recordObj.animalCastratedAmount);
        }
        this.ContentForm.controls['code'].setValue(this.moduleContent.recordObj.code);


        this.LookupAnimalType(this.moduleContent.recordObj.animalTypeCode);
        if (this.moduleContent.recordObj.animalTypeCode === 'Other') {
          this.animalTypeOtherBoolean = true;
        }
      }
    }


    this.ContentForm.controls['action'].setValue(this.actionFormObj);
  }

  ContentReset() {
    this.ContentForm.reset();
    this.animalTypeOtherBoolean = false;
  }

  ContentSave() {
    if (this.authenticationToken != null) {
      const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
      const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
      if (this.ContentForm.valid) {
        const contentParams = this.ContentForm.value;
        if (this.moduleContent.method === 'survey-no-owner') {
          contentParams.surveyCode = this.moduleContent.contentObj.surveyCode;
          contentParams.surveyRoundCode = this.moduleContent.contentObj.surveyRoundCode;
          contentParams.surveyNoOwnerInformationCode = this.moduleContent.contentObj.surveyNoOwnerInformationCode;
        }

        const authorization = 'Bearer ' + this.authenticationToken;
        const endpoint = this.moduleContent.endpoint;
        const newEndpoint = endpoint.url;
        this.Api.callWithOutScope(newEndpoint, endpoint.method, contentParams,  'Authorization', authorization).then((response) => {
          const res = response;
          if (res.contentObj !== null) {
            initialState.status = 'success';
            initialState.title = res.message;
            initialState.description = res.description;
            const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
            bsModalRefObj.content.action.subscribe(result => {
              if (contentParams.action === 'add') {
                this.ContentReset();
                this.action.emit({status: true});
              }

              if (contentParams.action === 'edit') {
                this.action.emit({status: true});
              }
            });
          } else {
            initialState.status = 'error';
            initialState.title = res.message;
            initialState.description = res.description;
            const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
          }
        }).catch((error) => {
          initialState.status = 'error';
          initialState.title = 'ข้อความจากระบบ';
          initialState.description = 'ไม่สามารถเพิ่มข้อมูลได้ เนื่องจากไม่มีข้อมูลในระบบ';
          const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
        });
      } else {
        initialState.status = 'error';
        initialState.title = 'ข้อความจากระบบ';
        initialState.description = 'กรุณากรอกข้อมูลสัตว์ให้ครบ';
        const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
      }
    } else {
      this.modalRef.hide();
    }
  }
}
