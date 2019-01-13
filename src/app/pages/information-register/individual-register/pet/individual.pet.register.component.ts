import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import * as moment from 'moment';
import { LazyLoadEvent } from 'primeng/primeng';

import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { CookieService } from 'ngx-cookie-service';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DialogAlertComponent } from './../../../../components/dialog-alert/dialog.alert.component';
import { ConfigService } from './../../../../core/config.service';

import { CallApiService } from './../../../../providers/request.providers';
import { Utility } from './../../../../api/utility';
import { User } from './../../../../api/user';
import { Animal } from './../../../../api/animal';
import { Registration } from './../../../../api/registration';

import { AnimalInfomationComponent } from './../../../animal-information/animal.information.component';


@Component({
  selector: 'app-individual-pet-register',
  templateUrl: './individual.pet.register.component.html',
  styleUrls: ['./individual.pet.register.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CallApiService]
})
export class IndividualPetRegisterComponent implements OnInit {
  ContentForm: FormGroup;
  authenticationToken: any;
  addressCode: any = '';
  profileCode: any = '';

  modalAnimalInfoRef: BsModalRef;
  modalRef: BsModalRef;
  // lookup

  provinceList: any = [];
  districtList: any = [];
  subDistrictList: any = [];
  shelterList: any = [];
  shelterOtherBoolean: Boolean = false;
  husbandryList: any = [];
  husbandryOtherBoolean: Boolean = false;
  registrationAnimalAddressObj: any = {};

  lookupHusbandry: any = [];
  lookupShelter: any = [];
  lookupProvince: any = [];
  lookupDistrict: any = [];
  lookupSubDistrict: any = [];

  // calendar
  dateTimeFormat: string;
  dateNow: string = moment().format('DD/MM/YYYY');
  lacaleTH: any;

  // datatable
  loading: Boolean;
  totalRecords: number;
  dataTableObj: any = [];
  recordNo: any = 1;
  pages: any;
  pageRows: any;

  actionParams: any = '';

  constructor(
    private Api: CallApiService,
    private ModalService: BsModalService,
    private themeConfig: ConfigService,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private cookieService: CookieService
  ) {
    this.route.params.subscribe( params => {
      if (params['profilecode']) {
        this.profileCode = params['profilecode'];
      }

      if (params['addresscode']) {
        this.addressCode = params['addresscode'];
      }
    } );

    if (this.addressCode !== '' && this.profileCode !== '') {
      this.actionParams = 'edit';
    } else if (this.addressCode === '' && this.profileCode !== '') {
      this.actionParams = 'add';
    }
  }

  ngOnInit() {
    /****** dataTable ******/
    this.pages = 1;
    this.totalRecords = 0;
    this.pageRows = 0;
    this.loading = true;


    this.LoadConfigCalendar();
    this.LoadConfigForm();
    this.LoadSessionPage();
    this.LoadLookup();
    this.CheckProfileCode();
    this.CheckAddressCode();
    this.LoadData((this.pages - 1));
  }

  /* ALL PAGE CONFIG */
  LoadConfigCalendar() {
    this.dateTimeFormat = this.themeConfig.defaultSettings.dateTimeFormat;
    this.lacaleTH = this.themeConfig.defaultSettings.lacaleTH;
  }

  LoadConfigForm() {
    this.ContentForm = new FormGroup({
      isSameAddress: new FormControl(false, Validators.required),
      placeName: new FormControl('', Validators.required),
      shelterCode: new FormControl('', Validators.required),
      shelterOther: new FormControl(''),
      husbandryCode: new FormControl('', Validators.required),
      husbandryOther: new FormControl(''),
      addressNo: new FormControl('', Validators.required),
      moo: new FormControl(''),
      soi: new FormControl(''),
      street: new FormControl(''),
      provinceCode: new FormControl('', Validators.required),
      districtCode: new FormControl('', Validators.required),
      subdistrictCode: new FormControl('', Validators.required),
      zipcode: new FormControl('', Validators.required),
      email: new FormControl(''),
      mobileNumber: new FormControl(''),
      registrationAnimalOwnerCode: new FormControl(''),
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

  breadcrumbLink (link: string) {
    this.router.navigate([link]);
  }

  paginate(event) {
    this.pages = (event.first / event.rows);
    this.LoadData((event.first / event.rows));
  }
  LoadContentLazy(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  LoadLookup() {
    this.LookupHusbandry();
    this.LookupShelter();
    this.LookupProvince();
  }

  /* END ALL PAGE CONFIG */

  /* LOOK UP */
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

  LookupProviceChange(event) {
    this.districtList = [];
    this.subDistrictList = [];
    this.LookupDistrict(event.value);
    this.LookupSubDistrict('');
    this.ContentForm.controls['districtCode'].setValue('');
    this.ContentForm.controls['subdistrictCode'].setValue('');
  }

  LookupDistrictChange(event) {
    this.subDistrictList = [];
    this.LookupSubDistrict(event.value);
    this.ContentForm.controls['subdistrictCode'].setValue('');
  }

  LookupSubDistrictChange(event) {
    if (this.subDistrictList.length > 0) {
      const findObj = this.subDistrictList.find(obj => obj.code === event.value);
      this.ContentForm.controls['zipcode'].setValue(findObj.zipcode);
    }
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

  /* END LOOK UP */

  /* VALIDATED PARAMS */
  CheckProfileCode () {
    const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
    const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
    if (this.authenticationToken != null && this.profileCode !== '') {
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Registration.MySelf.Inquiry.AnimalOwnerProfileById;
      const newEndpoint = endpoint.url.replace('{animal_owner_profile_code}', this.profileCode);
      this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((res) => {
        if (res.contentObj == null) {
          initialState.status = 'error';
          initialState.title = 'ข้อความจากระบบ';
          initialState.description = 'ไม่มีข้อมูลเจ้าของสัตว์ในระบบ';
          const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
          modalRef.content.action.subscribe(result => {
            this.router.navigate(['/information/individual']);
          });
        }
      }).catch((error) => {
        initialState.status = 'error';
        initialState.title = 'ข้อความจากระบบ';
        initialState.description = 'ไม่มีข้อมูลเจ้าของสัตว์ในระบบ';
        const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
        modalRef.content.action.subscribe(result => {
          this.router.navigate(['/information/individual']);
        });
      });
    } else {
      initialState.status = 'error';
      initialState.title = 'ข้อความจากระบบ';
      initialState.description = 'ไม่มีข้อมูลเจ้าของสัตว์ในระบบ';
      const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
      modalRef.content.action.subscribe(result => {
        this.router.navigate(['/information/individual']);
      });
    }
  }

  CheckAddressCode() {
    const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
    const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
    if (this.authenticationToken != null && this.addressCode !== '') {
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Registration.MySelf.Inquiry.AnimalOwnerAddressById;
      let newEndpoint = endpoint.url.replace('{animal_address_code}', this.addressCode);
      newEndpoint = newEndpoint.replace('{myself_code}', this.profileCode);
      this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((res) => {
        if (res.contentObj !== null) {
          this.actionParams = 'edit';
          this.LoadAnimalAddressField(res.contentObj, 'LoadFormAddessCode');
        } else {
          this.actionParams = 'add';
        }
      }).catch((error) => {
        initialState.status = 'error';
        initialState.title = 'ข้อความจากระบบ';
        initialState.description = 'ไม่มีข้อมูลเจ้าของสัตว์ในระบบ';
        const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
        modalRef.content.action.subscribe(result => {
          this.router.navigate(['/information/individual']);
        });
      });
    }
  }

  LoadAnimalAddressField (responseObj: any, pagesAction: any) {

    if (pagesAction === 'LoadFormAddessCode') {
      this.ContentForm.controls['isSameAddress'].setValue(responseObj.isSameAddress);
      this.ContentForm.controls['placeName'].setValue(responseObj.placeName);
      this.ContentForm.controls['shelterCode'].setValue(responseObj.shelterCode);
      if (responseObj.shelterCode === 'Other') {
        this.shelterOtherBoolean = true;
        this.ContentForm.controls['shelterOther'].setValue(responseObj.shelterOther);
      }
      this.ContentForm.controls['husbandryCode'].setValue(responseObj.husbandryCode);
      if (responseObj.husbandryCode === 'Other') {
        this.husbandryOtherBoolean = true;
        this.ContentForm.controls['husbandryOther'].setValue(responseObj.husbandryOther);
      }
      this.ContentForm.controls['email'].setValue(responseObj.email);
      this.ContentForm.controls['mobileNumber'].setValue(responseObj.mobileNumber);
      this.ContentForm.controls['addressNo'].setValue(responseObj.addressNo);
      this.ContentForm.controls['moo'].setValue(responseObj.moo);
      this.ContentForm.controls['soi'].setValue(responseObj.soi);
      this.ContentForm.controls['street'].setValue(responseObj.street);
      this.ContentForm.controls['provinceCode'].setValue(responseObj.provinceCode);
      this.ContentForm.controls['districtCode'].setValue(responseObj.districtCode);
      this.ContentForm.controls['subdistrictCode'].setValue(responseObj.subdistrictCode);
      this.ContentForm.controls['zipcode'].setValue(responseObj.zipcode);
      this.LookupProvince(responseObj.provinceCode);
      this.LookupDistrict(responseObj.provinceCode, responseObj.districtCode);
      this.LookupSubDistrict(responseObj.districtCode, responseObj.subdistrictCode);
      if (this.actionParams === 'edit') {
        this.ContentForm.controls['registrationAnimalOwnerCode'].setValue(responseObj.registrationAnimalOwnerCode);
        this.ContentForm.controls['code'].setValue(responseObj.code);
      }
    }

    if (pagesAction === 'LoadFormDuplicateAddress') {
      this.ContentForm.controls['addressNo'].setValue(responseObj.addressNo);
      this.ContentForm.controls['moo'].setValue(responseObj.moo);
      this.ContentForm.controls['soi'].setValue(responseObj.soi);
      this.ContentForm.controls['street'].setValue(responseObj.street);
      this.ContentForm.controls['provinceCode'].setValue(responseObj.provinceCode);
      this.ContentForm.controls['districtCode'].setValue(responseObj.districtCode);
      this.ContentForm.controls['subdistrictCode'].setValue(responseObj.subdistrictCode);
      this.ContentForm.controls['zipcode'].setValue(responseObj.zipcode);

      this.LookupProvince(responseObj.provinceCode);
      this.LookupDistrict(responseObj.provinceCode, responseObj.districtCode);
      this.LookupSubDistrict(responseObj.districtCode, responseObj.subdistrictCode);

      this.ContentForm.controls['registrationAnimalOwnerCode'].setValue(responseObj.code);
    }
  }

  DuplicateAddress(event: any) {
    if (event) {
      const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
      const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;

      if (this.authenticationToken != null && this.profileCode !== '') {
        const authorization = 'Bearer ' + this.authenticationToken;
        const endpoint = Registration.MySelf.Inquiry.AnimalOwnerProfileById;
        const newEndpoint = endpoint.url.replace('{animal_owner_profile_code}', this.profileCode);
        this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((res) => {
          if (res.contentObj != null) {
            const response = res.contentObj;
            this.LoadAnimalAddressField(response, 'LoadFormDuplicateAddress');
          } else {
            initialState.status = 'error';
            initialState.title = 'ข้อความจากระบบ';
            initialState.description = 'ไม่มีข้อมูลเจ้าของสัตว์ในระบบ';
            const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
            modalRef.content.action.subscribe(result => {
              this.router.navigate(['/information/individual']);
            });
          }
        }).catch((error) => {
          initialState.status = 'error';
          initialState.title = 'ข้อความจากระบบ';
          initialState.description = 'ไม่มีข้อมูลเจ้าของสัตว์ในระบบ';
          const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
          modalRef.content.action.subscribe(result => {
            this.router.navigate(['/information/individual']);
          });
        });
      } else {
        initialState.status = 'error';
        initialState.title = 'ข้อความจากระบบ';
        initialState.description = 'ไม่มีข้อมูลเจ้าของสัตว์ในระบบ';
        const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
        modalRef.content.action.subscribe(result => {
          this.router.navigate(['/information/individual']);
        });
      }
    } else {
      this.ContentForm.controls['addressNo'].setValue('');
      this.ContentForm.controls['moo'].setValue('');
      this.ContentForm.controls['soi'].setValue('');
      this.ContentForm.controls['street'].setValue('');
      this.ContentForm.controls['provinceCode'].setValue('');
      this.ContentForm.controls['districtCode'].setValue('');
      this.ContentForm.controls['subdistrictCode'].setValue('');
      this.ContentForm.controls['zipcode'].setValue('');
    }
  }

  /* PAGE ACTION */
  LoadData(pages: any) {
    const self = this;
    if (this.actionParams === 'edit') {
      if (this.authenticationToken != null) {
        const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
        const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
        const authorization = 'Bearer ' + this.authenticationToken;
        const endpoint = Registration.MySelf.Inquiry.AnimalInformation;
        let newEndpoint = endpoint.url.replace('{page_number}', pages);
        newEndpoint = newEndpoint.replace('{myself_code}', this.profileCode);
        newEndpoint = newEndpoint.replace('{animal_address_code}', this.addressCode);
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
  }

  ContentSave () {
    if (this.authenticationToken != null) {
      const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
      const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;

      if (this.ContentForm.valid) {
        const contentParams = this.ContentForm.value;
        const authorization = 'Bearer ' + this.authenticationToken;
        const endpoint = Registration.MySelf.Manage.AnimalOwnerAddress;

        this.Api.callWithOutScope(endpoint.url, endpoint.method, contentParams,  'Authorization', authorization).then((response) => {
          const res = response;
          if (res.contentObj !== null) {
            initialState.status = 'success';
            initialState.title = res.message;
            initialState.description = res.description;
            const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
            if (res.contentObj !== null) {
              this.actionParams = 'edit';
              this.addressCode = res.contentObj.code;
              this.registrationAnimalAddressObj = res.contentObj;
              this.ContentForm.controls['code'].setValue(res.contentObj.code);
            }
          } else {
            initialState.status = 'error';
            initialState.title = res.message;
            initialState.description = res.description;
            const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
          }
        }).catch((error) => {
            initialState.status = 'error';
            initialState.title = error.error.error.message;
            initialState.description = error.error.error.description;
            const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
        });
      } else {
        initialState.status = 'error';
        initialState.title = 'ข้อความจากระบบ';
        initialState.description = 'กรุณากรอกข้อมูลการเลี้ยงสัตว์ให้ครบ';
        const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
      }
    } else {
      this.router.navigate(['/login']);
    }
  }

  ContentReset() {
    if (this.actionParams === 'add') {
      this.ContentForm.reset();
    }

    if (this.actionParams === 'edit') {
      this.ContentForm.reset();
      this.CheckAddressCode();
    }
  }

  ActionEditContent(value: any) {
    let initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
    const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
    if (this.addressCode !== '') {

      initialState = this.themeConfig.defaultSettings.formInitialStateSetting;
      const dialogFormSetting = this.themeConfig.defaultSettings.dialogFormSetting;
      dialogFormSetting.class = dialogFormSetting.class + ' custom-width';

      initialState.actionFormObj = 'edit';
      initialState.moduleContent = {
        method: 'registration',
        endpoint: Registration.MySelf.Manage.AnimalInformation,
        recordObj: value,
        contentObj : {
          registrationAnimalOwnerCode : value.registrationAnimalOwnerCode,
          registrationAnimalAddressCode : value.registrationAnimalAddressCode,
        },
      };

      this.addressCode = initialState.moduleContent.contentObj.registrationAnimalAddressCode;
      this.profileCode = initialState.moduleContent.contentObj.registrationAnimalOwnerCode;

      // tslint:disable-next-line:max-line-length
      this.modalRef = this.ModalService.show(AnimalInfomationComponent, Object.assign({}, dialogFormSetting, { initialState }));
      this.modalRef.content.action.subscribe(result => {
        if (result.status) {
          this.LoadData((this.pages - 1));
        }
      });
    } else {
      initialState.status = 'error';
      initialState.title = 'ข้อความจากระบบ';
      initialState.description = 'กรุณาบันทึกข้อมูลการสัตว์เลี้ยงสัตว์ให้เรียบร้อยก่อน';
      const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
    }
  }

  ManageAnimalInformation() {
    let initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
    const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
    if (this.addressCode !== '') {
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Registration.MySelf.Inquiry.AnimalOwnerAddressById;
      let newEndpoint = endpoint.url.replace('{myself_code}', this.profileCode);
      newEndpoint = newEndpoint.replace('{animal_address_code}', this.addressCode);
      this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((res) => {
        if ( res.contentObj != null) {
          initialState = this.themeConfig.defaultSettings.formInitialStateSetting;
          const dialogFormSetting = this.themeConfig.defaultSettings.dialogFormSetting;
          dialogFormSetting.class = dialogFormSetting.class + ' custom-width';

          initialState.moduleContent = {
            method: 'registration',
            endpoint: Registration.MySelf.Manage.AnimalInformation,
            recordObj: null,
            contentObj : {
              registrationAnimalOwnerCode : res.contentObj.registrationAnimalOwnerCode,
              registrationAnimalAddressCode : res.contentObj.code,
            }
          };

          this.addressCode = initialState.moduleContent.contentObj.registrationAnimalAddressCode;
          this.profileCode = initialState.moduleContent.contentObj.registrationAnimalOwnerCode;

          // tslint:disable-next-line:max-line-length
          this.modalRef = this.ModalService.show(AnimalInfomationComponent, Object.assign({}, dialogFormSetting, { initialState }));
          this.modalRef.content.action.subscribe(result => {
            if (result.status) {
              this.LoadData((this.pages - 1));
            }
          });
        } else {
          initialState.status = 'error';
          initialState.title = 'ข้อความจากระบบ';
          initialState.description = 'ไม่สามารถเพิ่มข้อมูลได้ เนื่องจากไม่มีข้อมูลในระบบ';
          const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
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
      initialState.description = 'กรุณาบันทึกข้อมูลการสัตว์เลี้ยงสัตว์ให้เรียบร้อยก่อน';
      const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
    }
  }
}
