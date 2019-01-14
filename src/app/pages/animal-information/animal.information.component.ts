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
  @Input() actionFormObj: string;
  @Input() moduleContent: any;
  @Input() dataObj: any;
  @Output() action = new EventEmitter();

  ContentForm: FormGroup;
  authenticationToken: any;
  titleModal: string;
  addressCode: any = '';
  profileCode: any = '';
  animalCode: any = '';

  animalTypeOtherBoolean: Boolean = false;
  animalGenderTypeOtherBoolean: Boolean = false;
  animalSpeciesOtherBoolean: Boolean = false;
  animalColorOtherBoolean: Boolean = false;
  animalVaccineHistoryTypeBoolean: Boolean = false;
  animalCastratedHistoryTypeBoolean: Boolean = false;
  shelterOtherBoolean: Boolean = false;
  husbandryOtherBoolean: Boolean = false;

  animalTypeList: any = [];
  animalGenderTypeList: any = [];
  animalSpeciesList: any = [];
  animalColorList: any = [];
  animalVaccineHistoryTypeList: any = [];
  animalCastratedHistoryTypeList: any = [];
  provinceList: any = [];
  districtList: any = [];
  subDistrictList: any = [];
  shelterList: any = [];
  husbandryList: any = [];
  registrationAnimalAddressObj: any = {};

  lookupHusbandry: any = [];
  lookupShelter: any = [];
  lookupProvince: any = [];
  lookupDistrict: any = [];
  lookupSubDistrict: any = [];
  lookupAnimalType: any = [];
  lookupAnimalGenderType: any = [];
  lookupAnimalSpecies: any = [];
  lookupAnimalColor: any = [];
  lookupVaccineHistoryType: any = [];
  lookupCastratedHistoryType: any = [];

  // UPLOAD CONFIG
  uploadedFiles: any[] = [];
  fileToUpload: File = null;

  // calendar
  dateTimeFormat: string;
  dateNow: string = moment().format('DD/MM/YYYY');
  lacaleTH: any;

  // CONFIG PARAMS
  isUnknownAge: Boolean = false;
  rcGenderTypeKey: any = 'GenderType';
  rcVaccineHistoryTypeKey: any = 'VaccineHistoryType';
  rcCastratedHistoryTypeKey: any = 'CastratedHistoryType';
  actionParams: any = '';

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
      shelterCode: new FormControl(''),
      shelterOther: new FormControl(''),
      husbandryCode: new FormControl(''),
      husbandryOther: new FormControl(''),
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
    if (this.actionFormObj === 'add') {
      this.LookupAnimalType();
      this.LookupAnimalGenderType();
      this.LookupAnimalColor();
      this.LookupVaccineHistoryType();
      this.LookupCastratedHistoryType();
    }
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

  LookupAnimalGenderType(animalGenderTypeCode: any = '') {
    this.lookupAnimalGenderType = [];
    if (this.animalGenderTypeList.length === 0) {
      if (this.authenticationToken != null) {
        const authorization = 'Bearer ' + this.authenticationToken;
        const endpoint = Utility.ReferenceType.Inquiry.ByList.ListActive;
        const newEndpoint = endpoint.url.replace('{reference_code}', this.rcGenderTypeKey);
        this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((response) => {
          if (response != null) {
            this.animalGenderTypeList = response;
            response.forEach(element => {
              this.lookupAnimalGenderType.push({ value: element.code, label: element.nameTH });
            });
            if (animalGenderTypeCode !== '') {
              this.ContentForm.controls['animalGenderTypeCode'].setValue(animalGenderTypeCode);
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
    } else {
      this.animalGenderTypeList.forEach(element => {
        this.lookupAnimalGenderType.push({ value: element.code, label: element.nameTH });
      });
      if (animalGenderTypeCode !== '') {
        this.ContentForm.controls['animalGenderTypeCode'].setValue(animalGenderTypeCode);
      }
    }
  }


  LookupAnimalSpecies(animalTypeCode: any, animalSpeciesCode: any = '') {
    this.lookupAnimalSpecies = [];
    if (this.animalSpeciesList.length === 0) {
      if (this.authenticationToken != null && animalTypeCode !== '') {
        const authorization = 'Bearer ' + this.authenticationToken;
        const endpoint = Animal.Species.Inquiry.ByList.ListActive;
        const newEndpoint = endpoint.url.replace('{animal_type_code}', animalTypeCode);
        this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((response) => {
          if (response != null) {
            this.animalSpeciesList = response;
            response.forEach(element => {
              this.lookupAnimalSpecies.push({ value: element.code, label: element.nameTH });
            });
            if (animalSpeciesCode !== '') {
              this.ContentForm.controls['animalSpeciesCode'].setValue(animalSpeciesCode);
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
    } else {
      this.animalSpeciesList.forEach(element => {
        this.lookupAnimalSpecies.push({ value: element.code, label: element.nameTH });
      });
      if (animalSpeciesCode !== '') {
        this.ContentForm.controls['animalSpeciesCode'].setValue(animalSpeciesCode);
      }
    }
  }

  LookupAnimalColor(animalColorCode: any = '') {
    this.lookupAnimalColor = [];
    if (this.animalColorList.length === 0) {
      if (this.authenticationToken != null) {
        const authorization = 'Bearer ' + this.authenticationToken;
        const endpoint = Animal.Color.Inquiry.ByList.ListActive;
        this.Api.callWithOutScope(endpoint.url, endpoint.method, {},  'Authorization', authorization).then((response) => {
          if (response != null) {
            this.animalColorList = response;
            response.forEach(element => {
              this.lookupAnimalColor.push({ value: element.code, label: element.nameTH });
            });
            if (animalColorCode !== '') {
              this.ContentForm.controls['animalColorCode'].setValue(animalColorCode);
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
    } else {
      this.animalColorList.forEach(element => {
        this.lookupAnimalColor.push({ value: element.code, label: element.nameTH });
      });
      if (animalColorCode !== '') {
        this.ContentForm.controls['animalColorCode'].setValue(animalColorCode);
      }
    }
  }


  LookupVaccineHistoryType(vaccineHistoryTypeCode: any = '') {
    this.lookupVaccineHistoryType = [];
    if (this.animalVaccineHistoryTypeList.length === 0) {
      if (this.authenticationToken != null) {
        const authorization = 'Bearer ' + this.authenticationToken;
        const endpoint = Utility.ReferenceType.Inquiry.ByList.ListActive;
        const newEndpoint = endpoint.url.replace('{reference_code}', this.rcVaccineHistoryTypeKey);
        this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((response) => {
          if (response != null) {
            this.animalVaccineHistoryTypeList = response;
            response.forEach(element => {
              this.lookupVaccineHistoryType.push({ value: element.code, label: element.nameTH });
            });
            if (vaccineHistoryTypeCode !== '') {
              this.ContentForm.controls['animalVaccineHistoryTypeCode'].setValue(vaccineHistoryTypeCode);
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
    } else {
      this.animalVaccineHistoryTypeList.forEach(element => {
        this.lookupVaccineHistoryType.push({ value: element.code, label: element.nameTH });
      });
      if (vaccineHistoryTypeCode !== '') {
        this.ContentForm.controls['animalVaccineHistoryTypeCode'].setValue(vaccineHistoryTypeCode);
      }
    }
  }

  LookupCastratedHistoryType(castratedHistoryTypeCode: any = '') {
    this.lookupCastratedHistoryType = [];
    if (this.animalCastratedHistoryTypeList.length === 0) {
      if (this.authenticationToken != null) {
        this.animalCastratedHistoryTypeList = [];
        const authorization = 'Bearer ' + this.authenticationToken;
        const endpoint = Utility.ReferenceType.Inquiry.ByList.ListActive;
        const newEndpoint = endpoint.url.replace('{reference_code}', this.rcCastratedHistoryTypeKey);
        this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((response) => {
          if (response != null) {
            this.animalCastratedHistoryTypeList = response;
            response.forEach(element => {
              this.lookupCastratedHistoryType.push({ value: element.code, label: element.nameTH });
            });
            if (castratedHistoryTypeCode !== '') {
              this.ContentForm.controls['animalCastratedHistoryTypeCode'].setValue(castratedHistoryTypeCode);
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
    } else {
      this.animalCastratedHistoryTypeList.forEach(element => {
        this.lookupCastratedHistoryType.push({ value: element.code, label: element.nameTH });
      });
      if (castratedHistoryTypeCode !== '') {
        this.ContentForm.controls['animalCastratedHistoryTypeCode'].setValue(castratedHistoryTypeCode);
      }
    }
  }

  LookupHusbandry(husbandryCode: any = '') {
    if (this.husbandryList.length === 0) {
      this.lookupHusbandry = [];
      if (this.authenticationToken != null) {
        const authorization = 'Bearer ' + this.authenticationToken;
        const endpoint = Animal.Husbandry.Inquiry.ByList.ListActive;
        this.Api.callWithOutScope(endpoint.url, endpoint.method, {},  'Authorization', authorization).then((response) => {
          if (response != null) {
            this.husbandryList = response;
            response.forEach(element => {
              this.lookupHusbandry.push({ value: element.code, label: element.nameTH });
            });
            if (husbandryCode !== '') {
              this.ContentForm.controls['husbandryCode'].setValue(husbandryCode);
            }
          } else {
            this.lookupHusbandry = [];
          }
        }).catch((error) => {
          this.lookupHusbandry = [];
        });
      } else {
        this.lookupHusbandry = [];
      }
    } else {
      this.lookupHusbandry = [];
      this.husbandryList.forEach(element => {
        this.lookupHusbandry.push({ value: element.code, label: element.nameTH });
      });
      if (husbandryCode !== '') {
        this.ContentForm.controls['husbandryCode'].setValue(husbandryCode);
      }
    }
  }

  LookupShelter(shelterCode: any = '') {
    if (this.lookupShelter.length === 0) {
      if (this.authenticationToken != null) {
        this.lookupShelter = [];
        const authorization = 'Bearer ' + this.authenticationToken;
        const endpoint = Animal.Shelter.Inquiry.ByList.ListActive;
        this.Api.callWithOutScope(endpoint.url, endpoint.method, {},  'Authorization', authorization).then((response) => {
          if (response != null) {
            this.shelterList = response;
            response.forEach(element => {
              this.lookupShelter.push({ value: element.code, label: element.nameTH });
            });
            if (shelterCode !== '') {
              this.ContentForm.controls['shelterCode'].setValue(shelterCode);
            }
          } else {
            this.lookupShelter = [];
          }
        }).catch((error) => {
          this.lookupShelter = [];
        });
      } else {
        this.lookupShelter = [];
      }
    } else {
      this.lookupShelter = [];
      this.shelterList.forEach(element => {
        this.lookupShelter.push({ value: element.code, label: element.nameTH });
      });
      if (shelterCode !== '') {
        this.ContentForm.controls['shelterCode'].setValue(shelterCode);
      }
    }
  }

  LookupAnimalTypeCodeChange(event: any) {
    if (this.animalTypeList.length > 0) {
      const findObj = this.animalTypeList.find(obj => obj.code === event.value);
      this.animalTypeOtherBoolean = findObj.hasExtValue;
    }

    this.animalSpeciesList = [];
    this.animalSpeciesOtherBoolean = false;
    this.LookupAnimalSpecies(event.value);
  }

  LookupAnimalGenderTypeCodeChange(event: any) {
    if (this.animalGenderTypeList.length > 0) {
      const findObj = this.animalGenderTypeList.find(obj => obj.code === event.value);
      this.animalGenderTypeOtherBoolean = findObj.hasExtValue;
    }
  }

  LookupAnimalSpeciesCodeChange(event: any) {
    if (this.animalSpeciesList.length > 0) {
      const findObj = this.animalSpeciesList.find(obj => obj.code === event.value);
      this.animalSpeciesOtherBoolean = findObj.hasExtValue;
    }
  }

  LookupAnimalColorCodeChange(event: any) {
    if (this.animalColorList.length > 0) {
      const findObj = this.animalColorList.find(obj => obj.code === event.value);
      this.animalColorOtherBoolean = findObj.hasExtValue;
    }
  }

  LookupAnimalVaccineHistoryTypeCodeChange(contentValue: any) {

    if (contentValue.value === 'Vaccinated' || contentValue === '') {
      this.ContentForm.controls['animalVaccineAmount'].enable();
      this.ContentForm.controls['animalLastVaccineDate'].enable();
    } else {
      this.ContentForm.controls['animalVaccineAmount'].disable();
      this.ContentForm.controls['animalLastVaccineDate'].disable();
    }

    this.ContentForm.controls['animalVaccineAmount'].setValue('');
    this.ContentForm.controls['animalLastVaccineDate'].setValue('');
  }

  LookupAnimalCastratedHistoryTypeCodeChange(contentValue: any) {
    if (contentValue.value === 'Castrated' || contentValue === '') {
      this.ContentForm.controls['animalCastratedAmount'].enable();
      this.ContentForm.controls['animalLastCastratedDate'].enable();
    } else {
      this.ContentForm.controls['animalCastratedAmount'].disable();
      this.ContentForm.controls['animalLastCastratedDate'].disable();
    }

    this.ContentForm.controls['animalCastratedAmount'].setValue('');
    this.ContentForm.controls['animalLastCastratedDate'].setValue('');
  }

  LookupShelterChange(event: any) {
    if (this.shelterList.length > 0) {
      const findObj = this.shelterList.find(obj => obj.code === event.value);
      this.shelterOtherBoolean = findObj.hasExtValue;
      this.ContentForm.controls['shelterOther'].setValue('');
    }
  }

  LookupHusbandryChange(event: any) {
    if (this.husbandryList.length > 0) {
      const findObj = this.husbandryList.find(obj => obj.code === event.value);
      this.husbandryOtherBoolean = findObj.hasExtValue;
      this.ContentForm.controls['husbandryOther'].setValue('');
    }
  }

  IsUnknownAgeChange(event: any) {
    if (event) {
      this.ContentForm.controls['animalAgeYear'].disable();
      this.ContentForm.controls['animalAgeMonth'].disable();
    } else {
      this.ContentForm.controls['animalAgeYear'].enable();
      this.ContentForm.controls['animalAgeMonth'].enable();
    }

    this.ContentForm.controls['animalAgeYear'].setValue('');
    this.ContentForm.controls['animalAgeMonth'].setValue('');
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

  /* ==== END LOOKUP ===== */

  LoadAnimalCode () {
    if (this.actionFormObj === 'edit') {
      if (this.moduleContent.method === 'registration') {

        this.LookupAnimalType(this.moduleContent.recordObj.animalTypeCode);
        this.LookupAnimalGenderType(this.moduleContent.recordObj.animalGenderTypeCode);
        this.LookupAnimalColor(this.moduleContent.recordObj.animalColorCode);
        this.LookupAnimalSpecies(this.moduleContent.recordObj.animalTypeCode, this.moduleContent.recordObj.animalSpeciesCode);
        this.LookupVaccineHistoryType(this.moduleContent.recordObj.animalVaccineHistoryTypeCode);
        this.LookupCastratedHistoryType(this.moduleContent.recordObj.animalCastratedHistoryTypeCode);

        this.LookupAnimalTypeCodeChange({value: this.moduleContent.recordObj.animalTypeCode});
        this.LookupAnimalGenderTypeCodeChange({value: this.moduleContent.recordObj.animalGenderTypeCode});
        this.LookupAnimalColorCodeChange({value: this.moduleContent.recordObj.animalColorCode});
        this.LookupAnimalSpeciesCodeChange({value: this.moduleContent.recordObj.animalSpeciesCode});
        this.LookupAnimalVaccineHistoryTypeCodeChange({value: this.moduleContent.recordObj.animalVaccineHistoryTypeCode});
        this.LookupAnimalCastratedHistoryTypeCodeChange({value: this.moduleContent.recordObj.animalCastratedHistoryTypeCode});
        this.IsUnknownAgeChange(this.moduleContent.recordObj.isUnknownAge);

        this.ContentForm.controls['animalTypeCode'].setValue(this.moduleContent.recordObj.animalTypeCode);
        this.ContentForm.controls['animalTypeOther'].setValue(this.moduleContent.recordObj.animalTypeOther);
        this.ContentForm.controls['animalName'].setValue(this.moduleContent.recordObj.animalName);
        this.ContentForm.controls['animalGenderTypeCode'].setValue(this.moduleContent.recordObj.animalGenderTypeCode);
        this.ContentForm.controls['animalSpeciesCode'].setValue(this.moduleContent.recordObj.animalSpeciesCode);
        this.ContentForm.controls['animalSpeciesOther'].setValue(this.moduleContent.recordObj.animalSpeciesOther);
        this.ContentForm.controls['animalColorCode'].setValue(this.moduleContent.recordObj.animalColorCode);
        this.ContentForm.controls['animalColorOther'].setValue(this.moduleContent.recordObj.animalColorOther);
        this.ContentForm.controls['isUnknownAge'].setValue(this.moduleContent.recordObj.isUnknownAge);
        if (this.moduleContent.recordObj.animalAgeYear !== 0) {
          this.ContentForm.controls['animalAgeYear'].setValue(this.moduleContent.recordObj.animalAgeYear);
        }
        if (this.moduleContent.recordObj.animalAgeMonth !== 0) {
          this.ContentForm.controls['animalAgeMonth'].setValue(this.moduleContent.recordObj.animalAgeMonth);
        }
        this.ContentForm.controls['animalVaccineHistoryTypeCode'].setValue(this.moduleContent.recordObj.animalVaccineHistoryTypeCode);
        if (this.moduleContent.recordObj.animalVaccineAmount !== 0) {
          this.ContentForm.controls['animalVaccineAmount'].setValue(this.moduleContent.recordObj.animalVaccineAmount);
        }
        if (this.moduleContent.recordObj.animalLastVaccineDate !== null) {
          const animalLastVaccineDate = new Date(this.moduleContent.recordObj.animalLastVaccineDate);
          this.ContentForm.controls['animalLastVaccineDate'].setValue(animalLastVaccineDate);
        }
        this.ContentForm.controls['animalCastratedHistoryTypeCode'].setValue(this.moduleContent.recordObj.animalCastratedHistoryTypeCode);
        if (this.moduleContent.recordObj.animalCastratedAmount !== 0) {
          this.ContentForm.controls['animalCastratedAmount'].setValue(this.moduleContent.recordObj.animalCastratedAmount);
        }
        if (this.moduleContent.recordObj.animalLastCastratedDate !== null) {
          const animalLastCastratedDate = new Date(this.moduleContent.recordObj.animalLastCastratedDate);
          this.ContentForm.controls['animalLastCastratedDate'].setValue(animalLastCastratedDate);
        }
        this.ContentForm.controls['code'].setValue(this.moduleContent.recordObj.code);
      }

      if (this.moduleContent.method === 'survey-owner') {

        this.LookupAnimalType(this.moduleContent.recordObj.animalTypeCode);
        this.LookupAnimalGenderType(this.moduleContent.recordObj.animalGenderTypeCode);
        this.LookupAnimalColor(this.moduleContent.recordObj.animalColorCode);
        this.LookupAnimalSpecies(this.moduleContent.recordObj.animalTypeCode, this.moduleContent.recordObj.animalSpeciesCode);
        this.LookupVaccineHistoryType(this.moduleContent.recordObj.animalVaccineHistoryTypeCode);
        this.LookupCastratedHistoryType(this.moduleContent.recordObj.animalCastratedHistoryTypeCode);

        this.LookupAnimalTypeCodeChange({value: this.moduleContent.recordObj.animalTypeCode});
        this.LookupAnimalGenderTypeCodeChange({value: this.moduleContent.recordObj.animalGenderTypeCode});
        this.LookupAnimalColorCodeChange({value: this.moduleContent.recordObj.animalColorCode});
        this.LookupAnimalSpeciesCodeChange({value: this.moduleContent.recordObj.animalSpeciesCode});
        this.LookupAnimalVaccineHistoryTypeCodeChange({value: this.moduleContent.recordObj.animalVaccineHistoryTypeCode});
        this.LookupAnimalCastratedHistoryTypeCodeChange({value: this.moduleContent.recordObj.animalCastratedHistoryTypeCode});
        this.IsUnknownAgeChange(this.moduleContent.recordObj.isUnknownAge);

        this.ContentForm.controls['animalTypeCode'].setValue(this.moduleContent.recordObj.animalTypeCode);
        this.ContentForm.controls['animalTypeOther'].setValue(this.moduleContent.recordObj.animalTypeOther);
        this.ContentForm.controls['animalName'].setValue(this.moduleContent.recordObj.animalName);
        this.ContentForm.controls['animalGenderTypeCode'].setValue(this.moduleContent.recordObj.animalGenderTypeCode);
        this.ContentForm.controls['animalSpeciesCode'].setValue(this.moduleContent.recordObj.animalSpeciesCode);
        this.ContentForm.controls['animalSpeciesOther'].setValue(this.moduleContent.recordObj.animalSpeciesOther);
        this.ContentForm.controls['animalColorCode'].setValue(this.moduleContent.recordObj.animalColorCode);
        this.ContentForm.controls['animalColorOther'].setValue(this.moduleContent.recordObj.animalColorOther);
        this.ContentForm.controls['isUnknownAge'].setValue(this.moduleContent.recordObj.isUnknownAge);
        if (this.moduleContent.recordObj.animalAgeYear !== 0) {
          this.ContentForm.controls['animalAgeYear'].setValue(this.moduleContent.recordObj.animalAgeYear);
        }
        if (this.moduleContent.recordObj.animalAgeMonth !== 0) {
          this.ContentForm.controls['animalAgeMonth'].setValue(this.moduleContent.recordObj.animalAgeMonth);
        }
        this.ContentForm.controls['animalVaccineHistoryTypeCode'].setValue(this.moduleContent.recordObj.animalVaccineHistoryTypeCode);
        if (this.moduleContent.recordObj.animalVaccineAmount !== 0) {
          this.ContentForm.controls['animalVaccineAmount'].setValue(this.moduleContent.recordObj.animalVaccineAmount);
        }
        if (this.moduleContent.recordObj.animalLastVaccineDate !== null) {
          const animalLastVaccineDate = new Date(this.moduleContent.recordObj.animalLastVaccineDate);
          this.ContentForm.controls['animalLastVaccineDate'].setValue(animalLastVaccineDate);
        }
        this.ContentForm.controls['animalCastratedHistoryTypeCode'].setValue(this.moduleContent.recordObj.animalCastratedHistoryTypeCode);
        if (this.moduleContent.recordObj.animalCastratedAmount !== 0) {
          this.ContentForm.controls['animalCastratedAmount'].setValue(this.moduleContent.recordObj.animalCastratedAmount);
        }
        if (this.moduleContent.recordObj.animalLastCastratedDate !== null) {
          const animalLastCastratedDate = new Date(this.moduleContent.recordObj.animalLastCastratedDate);
          this.ContentForm.controls['animalLastCastratedDate'].setValue(animalLastCastratedDate);
        }
        this.ContentForm.controls['code'].setValue(this.moduleContent.recordObj.code);


      }
    }


    

    this.ContentForm.controls['action'].setValue(this.actionFormObj);
  }

  ContentReset() {
    this.ContentForm.reset();
    this.IsUnknownAgeChange(this.isUnknownAge);
    this.LookupAnimalVaccineHistoryTypeCodeChange('');
    this.LookupAnimalCastratedHistoryTypeCodeChange('');
    this.animalTypeOtherBoolean = false;
    this.animalGenderTypeOtherBoolean = false;
    this.animalSpeciesOtherBoolean = false;
    this.animalColorOtherBoolean = false;
    this.animalVaccineHistoryTypeBoolean = false;
    this.animalCastratedHistoryTypeBoolean = false;
  }

  ContentSave() {
    if (this.authenticationToken != null) {
      const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
      const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
      if (this.ContentForm.valid) {
        const contentParams = this.ContentForm.value;

        if (this.moduleContent.method === 'registration') {
          contentParams.registrationAnimalOwnerCode = this.moduleContent.contentObj.registrationAnimalOwnerCode;
          contentParams.registrationAnimalAddressCode = this.moduleContent.contentObj.registrationAnimalAddressCode;
        }

        if (this.moduleContent.method === 'survey-owner') {
          contentParams.surveyCode = this.moduleContent.contentObj.surveyCode;
          contentParams.surveyRoundCode = this.moduleContent.contentObj.surveyRoundCode;
          contentParams.surveyOwnerInformationCode = this.moduleContent.contentObj.surveyOwnerInformationCode;
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
