
import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import * as moment from 'moment';
import { LazyLoadEvent } from 'primeng/primeng';

import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { CookieService } from 'ngx-cookie-service';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DialogAlertComponent } from './../../../components/dialog-alert/dialog.alert.component';
import { ConfigService } from './../../../core/config.service';

import { CallApiService } from './../../../providers/request.providers';
import { Utility } from './../../../api/utility';
import { User } from './../../../api/user';
import { Animal } from './../../../api/animal';
import { Suspicious } from './../../../api/suspicious';



@Component({
  selector: 'app-animal-suspicious',
  templateUrl: './animal.suspicious.component.html',
  styleUrls: ['./animal.suspicious.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AnimalSuspiciousComponent implements OnInit {
    @Input() actionForm: string;
    @Input() moduleContent: any;
    @Input() dataObj: any;
    @Output() action = new EventEmitter();

    ContentForm: FormGroup;
    authenticationToken: any;
    titleModal: string;

    titleList: any = [];
    animalTypeList: any = [];
    provinceList: any = [];
    districtList: any = [];
    subDistrictList: any = [];
    fnProvinceList: any = [];
    fnDistrictList: any = [];
    fnSubDistrictList: any = [];
    shelterList: any = [];

    titleOtherBoolean: Boolean = false;
    animalTypeOtherBoolean: Boolean = false;
    shelterOtherBoolean: Boolean = false;

    lookupTitle: any = [];
    lookupAnimalType: any = [];
    lookupShelter: any = [];
    lookupProvince: any = [];
    lookupDistrict: any = [];
    lookupSubDistrict: any = [];
    lookupFnProvince: any = [];
    lookupFnDistrict: any = [];
    lookupFnSubDistrict: any = [];
    // calendar
    dateTimeFormat: string;
    dateNow: string = moment().format('DD/MM/YYYY');
    lacaleTH: any;

    // UPLOAD CONFIG
    uploadedFiles: any[] = [];
    fileToUpload: File = null;


    constructor(
      private Api: CallApiService,
      public modalRef: BsModalRef,
      private ModalService: BsModalService,
      private themeConfig: ConfigService,
      private router: Router,
      private route: ActivatedRoute,
      @Inject(SESSION_STORAGE) private storage: StorageService,
      private cookieService: CookieService
    ) {

    }


    ngOnInit() {
      this.LoadConfigCalendar();
      this.LoadConfigForm();
      this.LoadSessionPage();
      this.LoadLookup();
      this.setupModalHeader();
    }

    /* ALL PAGE CONFIG */
    LoadConfigCalendar() {
      this.dateTimeFormat = this.themeConfig.defaultSettings.dateTimeFormat;
      this.lacaleTH = this.themeConfig.defaultSettings.lacaleTH;
    }

    LoadConfigForm() {
      this.ContentForm = new FormGroup({
        notificationDate: new FormControl({value: this.dateNow, disabled: true}, Validators.required),
        notificationDateHidden: new FormControl(this.dateNow),
        code: new FormControl(''),
        animalTypeCode: new FormControl('', Validators.required),
        animalTypeOther: new FormControl(''),
        animalName: new FormControl('', Validators.required),
        titleCode: new FormControl('', Validators.required),
        titleOther: new FormControl(''),
        name: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        mobileNumber: new FormControl('', Validators.required),
        addressNo: new FormControl('', Validators.required),
        moo: new FormControl(''),
        soi: new FormControl(''),
        street: new FormControl(''),
        provinceCode: new FormControl('', Validators.required),
        districtCode: new FormControl('', Validators.required),
        subdistrictCode: new FormControl('', Validators.required),
        zipcode: new FormControl('', Validators.required),
        isSameAddress: new FormControl(false, Validators.required),
        fnPlaceName: new FormControl('', Validators.required),
        fnShelterCode: new FormControl('', Validators.required),
        fnShelterOther: new FormControl(''),
        fnAddressNo: new FormControl('', Validators.required),
        fnMoo: new FormControl(''),
        fnSoi: new FormControl(''),
        fnStreet: new FormControl(''),
        fnProvinceCode: new FormControl('', Validators.required),
        fnDistrictCode: new FormControl('', Validators.required),
        fnSubdistrictCode: new FormControl('', Validators.required),
        fnZipcode: new FormControl('', Validators.required),
        symptomInformation: new FormControl('', Validators.required),
        animalImage: new FormControl([])
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

    setupModalHeader() {
      switch (this.actionForm) {
        case 'add':
          this.titleModal = 'เพิ่มข้อมูลสัตว์ต้องสงสัย';
          break;
        case 'edit':
          this.titleModal = 'แก้ไขข้อมูลสัตว์ต้องสงสัย';
          this.ContentSelect(this.dataObj, false);
          break;
        case 'view':
          this.titleModal = 'แสดงข้อมูลสัตว์ต้องสงสัย';
          this.ContentSelect(this.dataObj, true);
          break;
        default:
          this.titleModal = 'จัดการข้อมูลสัตว์ต้องสงสัย';
      }
    }

    ContentSelect (contentObj: any, disabled: boolean) {
      if (contentObj.animalTypeCode !== '') {
        this.LookupAnimalType(contentObj.animalTypeCode);
      }
      if (contentObj.suspiciousInformer.titleCode !== '') {
        this.LookupTitle(contentObj.suspiciousInformer.titleCode);
      }
      if (contentObj.suspiciousInformer.provinceCode !== '') {
        this.LookupProvince(contentObj.suspiciousInformer.provinceCode);
      }
      if (contentObj.suspiciousInformer.districtCode !== '') {
        this.LookupDistrict(contentObj.suspiciousInformer.provinceCode, contentObj.suspiciousInformer.districtCode);
      }
      if (contentObj.suspiciousInformer.subdistrictCode !== '') {
        this.LookupSubDistrict(contentObj.suspiciousInformer.districtCode, contentObj.suspiciousInformer.subdistrictCode);
      }
      if (contentObj.suspiciousAnimalAddress.provinceCode !== '') {
        this.LookupFnProvince(contentObj.suspiciousAnimalAddress.provinceCode);
      }
      if (contentObj.suspiciousAnimalAddress.districtCode !== '') {
        this.LookupFnDistrict(contentObj.suspiciousAnimalAddress.provinceCode, contentObj.suspiciousAnimalAddress.districtCode);
      }
      if (contentObj.suspiciousAnimalAddress.subdistrictCode !== '') {
        this.LookupFnSubDistrict(contentObj.suspiciousAnimalAddress.districtCode, contentObj.suspiciousAnimalAddress.subdistrictCode);
      }
      if (contentObj.suspiciousAnimalAddress.shelterCode !== '') {
        this.LookupShelter(contentObj.suspiciousAnimalAddress.shelterCode);
      }

      this.ContentForm.controls['notificationDate'].setValue(contentObj.receiveDate);
      this.ContentForm.controls['notificationDateHidden'].setValue(contentObj.receiveDate);
      this.ContentForm.controls['code'].setValue(contentObj.code);
      this.ContentForm.controls['animalTypeCode'].setValue(contentObj.animalTypeCode);
      this.ContentForm.controls['animalTypeOther'].setValue(contentObj.animalTypeOther);
      this.ContentForm.controls['animalName'].setValue(contentObj.animalName);
      this.ContentForm.controls['titleCode'].setValue(contentObj.suspiciousInformer.titleCode);
      this.ContentForm.controls['titleOther'].setValue(contentObj.suspiciousInformer.titleOther);
      this.ContentForm.controls['name'].setValue(contentObj.suspiciousInformer.name);
      this.ContentForm.controls['email'].setValue(contentObj.suspiciousInformer.email);
      this.ContentForm.controls['mobileNumber'].setValue(contentObj.suspiciousInformer.mobileNumber);
      this.ContentForm.controls['addressNo'].setValue(contentObj.suspiciousInformer.addressNo);
      this.ContentForm.controls['moo'].setValue(contentObj.suspiciousInformer.moo);
      this.ContentForm.controls['soi'].setValue(contentObj.suspiciousInformer.soi);
      this.ContentForm.controls['street'].setValue(contentObj.suspiciousInformer.street);
      this.ContentForm.controls['provinceCode'].setValue(contentObj.suspiciousInformer.provinceCode);
      this.ContentForm.controls['districtCode'].setValue(contentObj.suspiciousInformer.districtCode);
      this.ContentForm.controls['subdistrictCode'].setValue(contentObj.suspiciousInformer.subdistrictCode);
      this.ContentForm.controls['zipcode'].setValue(contentObj.suspiciousInformer.zipcode);

      this.ContentForm.controls['isSameAddress'].setValue(contentObj.suspiciousAnimalAddress.isSameAddress);
      this.ContentForm.controls['fnPlaceName'].setValue(contentObj.suspiciousAnimalAddress.addressNo);
      this.ContentForm.controls['fnShelterCode'].setValue(contentObj.suspiciousAnimalAddress.shelterCode);
      this.ContentForm.controls['fnShelterOther'].setValue(contentObj.suspiciousAnimalAddress.shelterOther);
      this.ContentForm.controls['fnAddressNo'].setValue(contentObj.suspiciousAnimalAddress.addressNo);
      this.ContentForm.controls['fnMoo'].setValue(contentObj.suspiciousAnimalAddress.moo);
      this.ContentForm.controls['fnSoi'].setValue(contentObj.suspiciousAnimalAddress.soi);
      this.ContentForm.controls['fnStreet'].setValue(contentObj.suspiciousAnimalAddress.street);
      this.ContentForm.controls['fnProvinceCode'].setValue(contentObj.suspiciousAnimalAddress.provinceCode);
      this.ContentForm.controls['fnDistrictCode'].setValue(contentObj.suspiciousAnimalAddress.districtCode);
      this.ContentForm.controls['fnSubdistrictCode'].setValue(contentObj.suspiciousAnimalAddress.subdistrictCode);
      this.ContentForm.controls['fnZipcode'].setValue(contentObj.suspiciousAnimalAddress.zipcode);
      this.ContentForm.controls['symptomInformation'].setValue(contentObj.suspiciousSymptom.description);
      this.ContentForm.controls['animalImage'].setValue([]);




      if (disabled) {
        this.ContentForm.controls['notificationDate'].disable();
        this.ContentForm.controls['notificationDateHidden'].disable();
        this.ContentForm.controls['code'].disable();
        this.ContentForm.controls['animalTypeCode'].disable();
        this.ContentForm.controls['animalTypeOther'].disable();
        this.ContentForm.controls['animalName'].disable();
        this.ContentForm.controls['titleCode'].disable();
        this.ContentForm.controls['titleOther'].disable();
        this.ContentForm.controls['name'].disable();
        this.ContentForm.controls['email'].disable();
        this.ContentForm.controls['mobileNumber'].disable();
        this.ContentForm.controls['addressNo'].disable();
        this.ContentForm.controls['moo'].disable();
        this.ContentForm.controls['soi'].disable();
        this.ContentForm.controls['street'].disable();
        this.ContentForm.controls['provinceCode'].disable();
        this.ContentForm.controls['districtCode'].disable();
        this.ContentForm.controls['subdistrictCode'].disable();
        this.ContentForm.controls['zipcode'].disable();

        this.ContentForm.controls['isSameAddress'].disable();
        this.ContentForm.controls['fnPlaceName'].disable();
        this.ContentForm.controls['fnShelterCode'].disable();
        this.ContentForm.controls['fnShelterOther'].disable();
        this.ContentForm.controls['fnAddressNo'].disable();
        this.ContentForm.controls['fnMoo'].disable();
        this.ContentForm.controls['fnSoi'].disable();
        this.ContentForm.controls['fnStreet'].disable();
        this.ContentForm.controls['fnProvinceCode'].disable();
        this.ContentForm.controls['fnDistrictCode'].disable();
        this.ContentForm.controls['fnSubdistrictCode'].disable();
        this.ContentForm.controls['fnZipcode'].disable();
        this.ContentForm.controls['symptomInformation'].disable();
        this.ContentForm.controls['animalImage'].disable();
      } else {
        this.ContentForm.controls['notificationDate'].enable();
        this.ContentForm.controls['notificationDateHidden'].enable();
        this.ContentForm.controls['code'].enable();
        this.ContentForm.controls['animalTypeCode'].enable();
        this.ContentForm.controls['animalTypeOther'].enable();
        this.ContentForm.controls['animalName'].enable();
        this.ContentForm.controls['titleCode'].enable();
        this.ContentForm.controls['titleOther'].enable();
        this.ContentForm.controls['name'].enable();
        this.ContentForm.controls['email'].enable();
        this.ContentForm.controls['mobileNumber'].enable();
        this.ContentForm.controls['addressNo'].enable();
        this.ContentForm.controls['moo'].enable();
        this.ContentForm.controls['soi'].enable();
        this.ContentForm.controls['street'].enable();
        this.ContentForm.controls['provinceCode'].enable();
        this.ContentForm.controls['districtCode'].enable();
        this.ContentForm.controls['subdistrictCode'].enable();
        this.ContentForm.controls['zipcode'].enable();

        this.ContentForm.controls['isSameAddress'].enable();
        this.ContentForm.controls['fnPlaceName'].enable();
        this.ContentForm.controls['fnShelterCode'].enable();
        this.ContentForm.controls['fnShelterOther'].enable();
        this.ContentForm.controls['fnAddressNo'].enable();
        this.ContentForm.controls['fnMoo'].enable();
        this.ContentForm.controls['fnSoi'].enable();
        this.ContentForm.controls['fnStreet'].enable();
        this.ContentForm.controls['fnProvinceCode'].enable();
        this.ContentForm.controls['fnDistrictCode'].enable();
        this.ContentForm.controls['fnSubdistrictCode'].enable();
        this.ContentForm.controls['fnZipcode'].enable();
        this.ContentForm.controls['symptomInformation'].enable();
        this.ContentForm.controls['animalImage'].enable();
      }
    }

    LoadLookup() {
      this.LookupTitle();
      this.LookupAnimalType();
      this.LookupShelter();
      this.LookupProvince();
      this.LookupFnProvince();
    }

    /* LOOK UP */
    LookupTitle(titleCode: any = '') {
      this.lookupTitle = [];
      if (this.titleList.length === 0) {
        if (this.authenticationToken != null) {
          const authorization = 'Bearer ' + this.authenticationToken;
          const endpoint = Utility.Title.Inquiry.ByList.ListActive;
          this.Api.callWithOutScope(endpoint.url, endpoint.method, {},  'Authorization', authorization).then((response) => {
            if (response != null) {
              this.titleList = response;
              response.forEach(element => {
                this.lookupTitle.push({ value: element.code, label: element.nameTH });
              });
              if (titleCode !== '') {
                this.ContentForm.controls['titleCode'].setValue(titleCode);
              }
            } else {
              this.lookupTitle = [];
            }
          }).catch((error) => {
            this.lookupTitle = [];
          });
        } else {
          this.lookupTitle = [];
        }
      } else {
        this.titleList.forEach(element => {
          this.lookupTitle.push({ value: element.code, label: element.nameTH });
        });
        if (titleCode !== '') {
          this.ContentForm.controls['titleCode'].setValue(titleCode);
        }
      }
    }

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
    LookupShelter(shelterCode: any = '') {
      if (this.shelterList.length === 0) {
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
                this.ContentForm.controls['fnShelterCode'].setValue(shelterCode);
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
          this.ContentForm.controls['fnShelterCode'].setValue(shelterCode);
        }
      }
    }
    LookupProvince(provinceCode: any = '') {
      if (this.provinceList.length === 0) {
        if (this.authenticationToken != null) {
          this.lookupProvince = [];
          const authorization = 'Bearer ' + this.authenticationToken;
          const endpoint = Utility.Province.Inquiry.ByList.ListActive;
          this.Api.callWithOutScope(endpoint.url, endpoint.method, {},  'Authorization', authorization).then((response) => {
            if (response != null) {
              this.provinceList = response;
              response.forEach(element => {
                this.lookupProvince.push({ value: element.code, label: element.nameTH });
              });
              if (provinceCode !== '') {
                this.ContentForm.controls['provinceCode'].setValue(provinceCode);
              }
            } else {
              this.lookupProvince = [];
            }
          }).catch((error) => {
            this.lookupProvince = [];
          });
        } else {
          this.lookupProvince = [];
        }
      } else {
        this.lookupProvince = [];
        this.provinceList.forEach(element => {
          this.lookupProvince.push({ value: element.code, label: element.nameTH });
        });
        if (provinceCode !== '') {
          this.ContentForm.controls['provinceCode'].setValue(provinceCode);
        }
      }
    }

    LookupFnProvince(provinceCode: any = '') {
      if (this.fnProvinceList.length === 0) {
        if (this.authenticationToken != null) {
          this.lookupFnProvince = [];
          const authorization = 'Bearer ' + this.authenticationToken;
          const endpoint = Utility.Province.Inquiry.ByList.ListActive;
          this.Api.callWithOutScope(endpoint.url, endpoint.method, {},  'Authorization', authorization).then((response) => {
            if (response != null) {
              this.fnProvinceList = response;
              response.forEach(element => {
                this.lookupFnProvince.push({ value: element.code, label: element.nameTH });
              });
              if (provinceCode !== '') {
                this.ContentForm.controls['fnProvinceCode'].setValue(provinceCode);
              }
            } else {
              this.lookupFnProvince = [];
            }
          }).catch((error) => {
            this.lookupFnProvince = [];
          });
        } else {
          this.lookupFnProvince = [];
        }
      } else {
        this.lookupFnProvince = [];
        this.fnProvinceList.forEach(element => {
          this.lookupFnProvince.push({ value: element.code, label: element.nameTH });
        });
        if (provinceCode !== '') {
          this.ContentForm.controls['fnProvinceCode'].setValue(provinceCode);
        }
      }
    }
    LookupDistrict(provinceCode: any, districtCode: any = '') {
      if (this.districtList.length === 0) {
        if (this.authenticationToken != null) {
          this.lookupDistrict = [];
          const authorization = 'Bearer ' + this.authenticationToken;
          const endpoint = Utility.District.Inquiry.ByList.Filter.Province.ListActive;
          const newEndpoint = endpoint.url.replace('{province_id}', provinceCode);
          this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((response) => {
            if (response != null) {
              this.districtList = response;
              response.forEach(element => {
                this.lookupDistrict.push({ value: element.code, label: element.nameTH });
              });
              if (districtCode !== '') {
                this.ContentForm.controls['districtCode'].setValue(districtCode);
              }
            } else {
              this.lookupDistrict = [];
            }
          }).catch((error) => {
            this.lookupDistrict = [];
          });
        } else {
          this.lookupDistrict = [];
        }
      } else {
        this.lookupDistrict = [];
        this.districtList.forEach(element => {
          this.lookupDistrict.push({ value: element.code, label: element.nameTH });
        });
        if (districtCode !== '') {
          this.ContentForm.controls['districtCode'].setValue(districtCode);
        }
      }
    }

    LookupFnDistrict(provinceCode: any, districtCode: any = '') {
      if (this.fnDistrictList.length === 0) {
        if (this.authenticationToken != null) {
          this.lookupFnDistrict = [];
          const authorization = 'Bearer ' + this.authenticationToken;
          const endpoint = Utility.District.Inquiry.ByList.Filter.Province.ListActive;
          const newEndpoint = endpoint.url.replace('{province_id}', provinceCode);
          this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((response) => {
            if (response != null) {
              this.fnDistrictList = response;
              response.forEach(element => {
                this.lookupFnDistrict.push({ value: element.code, label: element.nameTH });
              });
              if (districtCode !== '') {
                this.ContentForm.controls['fnDistrictCode'].setValue(districtCode);
              }
            } else {
              this.lookupFnDistrict = [];
            }
          }).catch((error) => {
            this.lookupFnDistrict = [];
          });
        } else {
          this.lookupFnDistrict = [];
        }
      } else {
        this.lookupFnDistrict = [];
        this.fnDistrictList.forEach(element => {
          this.lookupFnDistrict.push({ value: element.code, label: element.nameTH });
        });
        if (districtCode !== '') {
          this.ContentForm.controls['fnDistrictCode'].setValue(districtCode);
        }
      }
    }
    LookupSubDistrict(districtCode: any, subdistrictCode: any = '') {
      if (this.subDistrictList.length === 0) {
        if (this.authenticationToken != null) {
          this.lookupSubDistrict = [];
          const authorization = 'Bearer ' + this.authenticationToken;
          const endpoint = Utility.SubDistrict.Inquiry.ByList.Filter.District.ListActive;
          const newEndpoint = endpoint.url.replace('{district_id}', districtCode);
          this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((response) => {
            if (response != null) {
              this.subDistrictList = response;
              response.forEach(element => {
                this.lookupSubDistrict.push({ value: element.code, label: element.nameTH });
              });
              if (subdistrictCode !== '') {
                this.ContentForm.controls['subdistrictCode'].setValue(subdistrictCode);
              }
            } else {
              this.lookupSubDistrict = [];
            }
          }).catch((error) => {
            this.lookupSubDistrict = [];
          });
        } else {
          this.lookupSubDistrict = [];
        }
      } else {
        this.lookupSubDistrict = [];
        this.subDistrictList.forEach(element => {
          this.lookupSubDistrict.push({ value: element.code, label: element.nameTH });
        });
        if (subdistrictCode !== '') {
          this.ContentForm.controls['subdistrictCode'].setValue(subdistrictCode);
        }
      }
    }

    LookupFnSubDistrict(districtCode: any, subdistrictCode: any = '') {
      if (this.fnSubDistrictList.length === 0) {
        if (this.authenticationToken != null) {
          this.lookupFnSubDistrict = [];
          const authorization = 'Bearer ' + this.authenticationToken;
          const endpoint = Utility.SubDistrict.Inquiry.ByList.Filter.District.ListActive;
          const newEndpoint = endpoint.url.replace('{district_id}', districtCode);
          this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((response) => {
            if (response != null) {
              this.fnSubDistrictList = response;
              response.forEach(element => {
                this.lookupFnSubDistrict.push({ value: element.code, label: element.nameTH });
              });
              if (subdistrictCode !== '') {
                this.ContentForm.controls['fnSubdistrictCode'].setValue(subdistrictCode);
              }
            } else {
              this.lookupFnSubDistrict = [];
            }
          }).catch((error) => {
            this.lookupFnSubDistrict = [];
          });
        } else {
          this.lookupFnSubDistrict = [];
        }
      } else {
        this.lookupFnSubDistrict = [];
        this.fnSubDistrictList.forEach(element => {
          this.lookupFnSubDistrict.push({ value: element.code, label: element.nameTH });
        });
        if (subdistrictCode !== '') {
          this.ContentForm.controls['fnSubdistrictCode'].setValue(subdistrictCode);
        }
      }
    }
    LookupTitleChange(event) {
      if (this.titleList.length > 0) {
        const findObj = this.titleList.find(obj => obj.code === event.value);
        this.titleOtherBoolean = findObj.hasExtValue;
      }
    }
    LookupAnimalTypeCodeChange(event: any) {
      if (this.animalTypeList.length > 0) {
        const findObj = this.animalTypeList.find(obj => obj.code === event.value);
        this.animalTypeOtherBoolean = findObj.hasExtValue;
      }
    }
    LookupProviceChange(event) {
      this.districtList = [];
      this.subDistrictList = [];
      this.LookupDistrict(event.value);
      this.LookupSubDistrict(0);
      this.ContentForm.controls['districtCode'].setValue('');
      this.ContentForm.controls['subdistrictCode'].setValue('');
    }
    LookupFnProviceChange(event) {
      this.fnDistrictList = [];
      this.fnSubDistrictList = [];
      this.LookupFnDistrict(event.value);
      this.LookupFnSubDistrict(0);
      this.ContentForm.controls['fnDistrictCode'].setValue('');
      this.ContentForm.controls['fnSubdistrictCode'].setValue('');
    }
    LookupDistrictChange(event) {
      this.subDistrictList = [];
      this.LookupSubDistrict(event.value);
      this.ContentForm.controls['subdistrictCode'].setValue('');
    }
    LookupFnDistrictChange(event) {
      this.fnSubDistrictList = [];
      this.LookupFnSubDistrict(event.value);
      this.ContentForm.controls['fnSubdistrictCode'].setValue('');
    }
    LookupSubDistrictChange(event) {
      if (this.subDistrictList.length > 0) {
        const findObj = this.subDistrictList.find(obj => obj.code === event.value);
        this.ContentForm.controls['zipcode'].setValue(findObj.zipcode);
      }
    }
    LookupFnSubDistrictChange(event) {
      if (this.fnSubDistrictList.length > 0) {
        const findObj = this.fnSubDistrictList.find(obj => obj.code === event.value);
        this.ContentForm.controls['fnZipcode'].setValue(findObj.zipcode);
      }
    }
    LookupShelterChange(event: any) {
      if (this.shelterList.length > 0) {
        const findObj = this.shelterList.find(obj => obj.code === event.value);
        this.shelterOtherBoolean = findObj.hasExtValue;
        this.ContentForm.controls['fnshelterOther'].setValue('');
      }
    }

    handleFileInput(file) {
    }

    clearFileInput() {
    }

    removeFileInput(file) {
    }

    DuplicateAddress(event: any) {
      if (event) {
        if (this.ContentForm.controls['provinceCode'].value !== '') {
          this.LookupFnProvince(this.ContentForm.controls['provinceCode'].value);
        }

        if (this.ContentForm.controls['districtCode'].value !== '') {
          this.LookupFnDistrict(this.ContentForm.controls['provinceCode'].value, this.ContentForm.controls['districtCode'].value);
        }

        if (this.ContentForm.controls['subdistrictCode'].value !== '') {
          this.LookupFnSubDistrict(this.ContentForm.controls['districtCode'].value, this.ContentForm.controls['subdistrictCode'].value);
        }

        this.ContentForm.controls['fnAddressNo'].setValue(this.ContentForm.controls['addressNo'].value);
        this.ContentForm.controls['fnMoo'].setValue(this.ContentForm.controls['moo'].value);
        this.ContentForm.controls['fnSoi'].setValue(this.ContentForm.controls['soi'].value);
        this.ContentForm.controls['fnStreet'].setValue(this.ContentForm.controls['street'].value);
        this.ContentForm.controls['fnProvinceCode'].setValue(this.ContentForm.controls['provinceCode'].value);
        this.ContentForm.controls['fnDistrictCode'].setValue(this.ContentForm.controls['districtCode'].value);
        this.ContentForm.controls['fnSubdistrictCode'].setValue(this.ContentForm.controls['subdistrictCode'].value);
        this.ContentForm.controls['fnZipcode'].setValue(this.ContentForm.controls['zipcode'].value);


      } else {
        this.ContentForm.controls['fnAddressNo'].setValue('');
        this.ContentForm.controls['fnMoo'].setValue('');
        this.ContentForm.controls['fnSoi'].setValue('');
        this.ContentForm.controls['fnStreet'].setValue('');
        this.ContentForm.controls['fnProvinceCode'].setValue('');
        this.ContentForm.controls['fnDistrictCode'].setValue('');
        this.ContentForm.controls['fnSubdistrictCode'].setValue('');
        this.ContentForm.controls['fnZipcode'].setValue('');
      }
    }

    ContentReset() {
      this.ContentForm.reset();
      this.titleOtherBoolean = false;
      this.animalTypeOtherBoolean = false;
      this.shelterOtherBoolean = false;
    }

    ContentSave() {
      const self = this;
      if (this.authenticationToken != null) {
        const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
        const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
        if (this.ContentForm.valid) {
          const contentParams = this.ContentForm.value;
          const authorization = 'Bearer ' + this.authenticationToken;
          const endpoint = Suspicious.Manage.Information;
          const newEndpoint = endpoint.url;
          this.Api.callWithOutScope(newEndpoint, endpoint.method, contentParams,  'Authorization', authorization).then((response) => {
            const res = response;
            if (res.contentObj !== null) {
              initialState.status = 'success';
              initialState.title = res.message;
              initialState.description = res.description;
              const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
              bsModalRefObj.content.action.subscribe(result => {
                if (self.actionForm === 'add') {
                  this.ContentReset();
                  this.action.emit({status: true});
                }
                if (self.actionForm === 'edit') {
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

    modalClose() {
      this.modalRef.hide();
    }
}
