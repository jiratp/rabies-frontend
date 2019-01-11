import { Component, OnInit, Output, Input, EventEmitter, ViewEncapsulation, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import * as moment from 'moment';
import { LazyLoadEvent } from 'primeng/primeng';

import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { CookieService } from 'ngx-cookie-service';

import { DialogAlertComponent } from './../../components/dialog-alert/dialog.alert.component';
import { ConfigService } from './../../core/config.service';

import { CallApiService } from './../../providers/request.providers';
import { Utility } from './../../api/utility';
import { User } from './../../api/user';
import { Animal } from './../../api/animal';
import { Registration } from './../../api/registration';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-animal-information',
  templateUrl: './animal.information.component.html',
  styleUrls: ['./animal.information.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CallApiService]
})
export class AnimalInfomationComponent implements OnInit {
  @Input() actionForm: string;
  @Input() dataObj: any;
  @Output() action = new EventEmitter();

  AIForm: FormGroup;
  dateTimeFormat: string;
  lacaleTH: any;

  authenticationToken: any;

  isUnknownAge: Boolean = false;

  rcGenderTypeKey: any = 'GenderType';
  rcVaccineHistoryTypeKey: any = 'VaccineHistoryType';
  rcCastratedHistoryTypeKey: any = 'CastratedHistoryType';

  animalTypeOtherBoolean: Boolean = false;
  animalGenderTypeOtherBoolean: Boolean = false;
  animalSpeciesOtherBoolean: Boolean = false;
  animalColorOtherBoolean: Boolean = false;

  lookupAnimalType: any = [];
  lookupAnimalGenderType: any = [];
  lookupAnimalSpecies: any = [];
  lookupAnimalColor: any = [];
  lookupVaccineHistoryType: any = [];
  lookupCastratedHistoryType: any = [];

  titleModal: string;

  uploadedFiles: any[] = [];
  fileToUpload: File = null;

  animalTypeList: any = [];
  animalGenderTypeList: any = [];
  animalSpeciesList: any = [];
  animalColorList: any = [];

  constructor(
    private Api: CallApiService,
    private ModalService: BsModalService,
    public modalRef: BsModalRef,
    private themeConfig: ConfigService,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private cookieService: CookieService
  ) {

  }

  ngOnInit() {
    this.setupModalHeader();
    this.LoadConfigCalendar();
    this.LoadConfigForm();
    this.LoadSessionPage();
    this.LoadLookup();
  }

  LoadConfigCalendar() {
    this.dateTimeFormat = this.themeConfig.defaultSettings.dateTimeFormat;
    this.lacaleTH = this.themeConfig.defaultSettings.lacaleTH;
  }

  LoadConfigForm() {
    this.AIForm = new FormGroup({
      animalTypeCode: new FormControl('', Validators.required),
      animalTypeOther: new FormControl(''),
      animalName: new FormControl('', Validators.required),
      animalGenderTypeCode: new FormControl('', Validators.required),
      animalSpeciesCode: new FormControl('', Validators.required),
      animalSpeciesOther: new FormControl(''),
      animalColorCode: new FormControl('', Validators.required),
      animalColorOther: new FormControl(''),
      isUnknownAge: new FormControl(this.isUnknownAge,  Validators.required),
      animalAgeYear: new FormControl(''),
      animalAgeMonth: new FormControl(''),
      animalVaccineHistoryTypeCode: new FormControl(''),
      animalVaccineAmount: new FormControl(''),
      animalLastVaccineDate: new FormControl(''),
      animalCastratedHistoryTypeCode: new FormControl(''),
      animalCastratedAmount: new FormControl(''),
      animalLastCastratedDate: new FormControl(''),
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
    this.LookupAnimalGenderType();
    this.LookupAnimalSpecies();
    this.LookupAnimalColor();
    this.LookupVaccineHistoryType();
    this.LookupCastratedHistoryType();
  }

  setupModalHeader() {
    switch (this.actionForm) {
      case 'add':
        this.titleModal = 'เพิ่มข้อมูลสัตว์';
        break;
      default:
        this.titleModal = 'จัดการข้อมูลสัตว์';
    }
  }

  handleFileInput(file) {
  }

  clearFileInput() {
  }

  removeFileInput(file) {
  }

  modalClose() {
    this.action.emit({status: false});
    this.modalRef.hide();
  }

  ContentSave() {
    if (this.authenticationToken != null) {
      const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
      const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;

      if (this.AIForm.valid) {
        const contentParams = this.AIForm.value;
        const authorization = 'Bearer ' + this.authenticationToken;
        contentParams.actionForm = '';
        if (this.actionForm === 'add') {
          contentParams.actionForm = 'add';
        } else if (this.actionForm === 'edit') {
          contentParams.actionForm = 'edit';
        }
        
        this.action.emit({status: true, contentObj: contentParams});
      } else {
        initialState.status = 'error';
        initialState.title = 'ข้อความจากระบบ';
        initialState.description = 'กรุณากรอกข้อมูลสายพันธ์สัตว์ให้ครบ';
        const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
      }
    } else {
      this.modalRef.hide();
    }
  }

  LookupAnimalType(contetCode: any = '') {
    this.lookupAnimalType = [];
    if (this.authenticationToken != null) {
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Animal.Type.Inquiry.ByList.ListActive;
      this.Api.callWithOutScope(endpoint.url, endpoint.method, {},  'Authorization', authorization).then((response) => {
        if (response != null) {
          response.forEach(element => {
            this.lookupAnimalType.push({ value: element.code, label: element.nameTH });
          });

          if (contetCode !== '') {
            this.AIForm.controls['animalTypeCode'].setValue(contetCode);
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
  }

  LookupAnimalGenderType(contetCode: any = '') {
    this.lookupAnimalGenderType = [];
    if (this.authenticationToken != null) {
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Utility.ReferenceType.Inquiry.ByList.ListActive;
      const newEndpoint = endpoint.url.replace('{reference_code}', this.rcGenderTypeKey);
      this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((response) => {
        if (response != null) {
          response.forEach(element => {
            this.lookupAnimalGenderType.push({ value: element.code, label: element.nameTH });
          });

          if (contetCode !== '') {
            this.AIForm.controls['animalGenderTypeCode'].setValue(contetCode);
          }
        } else {
          this.lookupAnimalGenderType = [];
        }
      }).catch((error) => {
        this.lookupAnimalGenderType = [];
      });
    } else {
      this.lookupAnimalGenderType = [];
    }
  }

  LookupAnimalSpecies(contetCode: any = '') {
    this.lookupAnimalSpecies = [];
    if (this.authenticationToken != null) {
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Animal.Species.Inquiry.ByList.ListActive;
      const newEndpoint = endpoint.url.replace('{animal_type_code}', this.AIForm.controls['animalTypeCode'].value);
      this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((response) => {
        if (response != null) {
          response.forEach(element => {
            this.lookupAnimalSpecies.push({ value: element.code, label: element.nameTH });
          });

          if (contetCode !== '') {
            this.AIForm.controls['animalSpeciesCode'].setValue(contetCode);
          }
        } else {
          this.lookupAnimalSpecies = [];
        }
      }).catch((error) => {
        this.lookupAnimalSpecies = [];
      });
    } else {
      this.lookupAnimalSpecies = [];
    }
  }

  LookupAnimalColor(contetCode: any = '') {
    this.lookupAnimalColor = [];
    if (this.authenticationToken != null) {
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Animal.Color.Inquiry.ByList.ListActive;
      this.Api.callWithOutScope(endpoint.url, endpoint.method, {},  'Authorization', authorization).then((response) => {
        if (response != null) {
          response.forEach(element => {
            this.lookupAnimalColor.push({ value: element.code, label: element.nameTH });
          });

          if (contetCode !== '') {
            this.AIForm.controls['animalColorCode'].setValue(contetCode);
          }
        } else {
          this.lookupAnimalColor = [];
        }
      }).catch((error) => {
        this.lookupAnimalColor = [];
      });
    } else {
      this.lookupAnimalColor = [];
    }
  }

  LookupVaccineHistoryType(vaccineHistoryTypeCode: any = '') {
    this.lookupVaccineHistoryType = [];
    if (this.authenticationToken != null) {
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Utility.ReferenceType.Inquiry.ByList.ListActive;
      const newEndpoint = endpoint.url.replace('{reference_code}', this.rcVaccineHistoryTypeKey);
      this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((response) => {
        if (response != null) {
          response.forEach(element => {
            this.lookupVaccineHistoryType.push({ value: element.code, label: element.nameTH });
          });

          if (vaccineHistoryTypeCode !== '') {
            this.AIForm.controls['vaccineHistoryTypeCode'].setValue(vaccineHistoryTypeCode);
          }
        } else {
          this.lookupVaccineHistoryType = [];
        }
      }).catch((error) => {
        this.lookupVaccineHistoryType = [];
      });
    } else {
      this.lookupVaccineHistoryType = [];
    }
  }

  LookupCastratedHistoryType(castratedHistoryTypeCode: any = '') {
    this.lookupCastratedHistoryType = [];
    if (this.authenticationToken != null) {
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Utility.ReferenceType.Inquiry.ByList.ListActive;
      const newEndpoint = endpoint.url.replace('{reference_code}', this.rcCastratedHistoryTypeKey);
      this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((response) => {
        if (response != null) {
          response.forEach(element => {
            this.lookupCastratedHistoryType.push({ value: element.code, label: element.nameTH });
          });

          if (castratedHistoryTypeCode !== '') {
            this.AIForm.controls['castratedHistoryTypeCode'].setValue(castratedHistoryTypeCode);
          }
        } else {
          this.lookupCastratedHistoryType = [];
        }
      }).catch((error) => {
        this.lookupCastratedHistoryType = [];
      });
    } else {
      this.lookupCastratedHistoryType = [];
    }
  }

  AnimalTypeCodeChange(event: any) {
    if (this.animalTypeList.length > 0) {
      const findObj = this.animalTypeList.find(obj => obj.code === event.value);
      this.animalTypeOtherBoolean = findObj.hasExtValue;
    }
  }

  AnimalGenderTypeCodeChange(event: any) {
    if (this.animalGenderTypeList.length > 0) {
      const findObj = this.animalGenderTypeList.find(obj => obj.code === event.value);
      this.animalGenderTypeOtherBoolean = findObj.hasExtValue;
    }
  }

  AnimalSpeciesCodeChange(event: any) {
    if (this.animalSpeciesList.length > 0) {
      const findObj = this.animalSpeciesList.find(obj => obj.code === event.value);
      this.animalSpeciesOtherBoolean = findObj.hasExtValue;
    }
  }

  AnimalColorCodeChange(event: any) {
    if (this.animalColorList.length > 0) {
      const findObj = this.animalColorList.find(obj => obj.code === event.value);
      this.animalColorOtherBoolean = findObj.hasExtValue;
    }
  }

  AnimalVaccineHistoryTypeCodeChange(contentValue: any) {
    if (contentValue !== 'Unknown') {
      this.AIForm.controls['animalVaccineAmount'].enable();
      this.AIForm.controls['animalLastVaccineDate'].enable();
    } else {
      this.AIForm.controls['animalVaccineAmount'].disable();
      this.AIForm.controls['animalLastVaccineDate'].disable();
    }
  }

  AnimalCastratedHistoryTypeCodeChange(contentValue: any) {
    if (contentValue !== 'Unknown') {
      this.AIForm.controls['animalCastratedAmount'].enable();
      this.AIForm.controls['animalLastCastratedDate'].enable();
    } else {
      this.AIForm.controls['animalCastratedAmount'].disable();
      this.AIForm.controls['animalLastCastratedDate'].disable();
    }
  }

  IsUnknownAgeChange(event: any) {
    if (event) {
      this.AIForm.controls['animalAgeYear'].disable();
      this.AIForm.controls['animalAgeMonth'].disable();
    } else {
      this.AIForm.controls['animalAgeYear'].enable();
      this.AIForm.controls['animalAgeMonth'].enable();
    }
  }
}
