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

  subDistrictList: any = [];
  shelterList: any = [];
  shelterOtherBoolean: Boolean = false;
  husbandryList: any = [];
  husbandryOtherBoolean: Boolean = false;

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
      if (params['profileCode']) {
        this.profileCode = params['profileCode'];
      }

      if (params['addressCode']) {
        this.addressCode = params['addressCode'];
      }
    } );
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
  }

  LoadConfigForm() {

    this.ContentForm = new FormGroup({
      isSameAddress: new FormControl(false, Validators.required),
      placeName: new FormControl(''),
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
      animalOwnerCode: new FormControl(''),
      animalAddressCode: new FormControl(''),
    });
}


  LoadConfigCalendar() {
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

  LoadLookup() {
    this.LookupShelter();
    this.LookupProvince();
  }

  LookupHusbandry(husbandryCode: any = '') {
    this.lookupHusbandry = [];
    if (this.authenticationToken != null) {
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Animal.Husbandry.Inquiry.ByList.ListActive;
      this.Api.callWithOutScope(endpoint.url, endpoint.method, {},  'Authorization', authorization).then((response) => {
        if (response != null) {
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
  }

  LookupShelter(shelterCode: any = '') {
    this.lookupShelter = [];
    if (this.authenticationToken != null) {
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Animal.Shelter.Inquiry.ByList.ListActive;
      this.Api.callWithOutScope(endpoint.url, endpoint.method, {},  'Authorization', authorization).then((response) => {
        if (response != null) {
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
  }

  LookupProvince(provinceCode: any = '') {
    this.lookupProvince = [];
    if (this.authenticationToken != null) {
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Utility.Province.Inquiry.ByList.ListActive;
      this.Api.callWithOutScope(endpoint.url, endpoint.method, {},  'Authorization', authorization).then((response) => {
        if (response != null) {
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
  }

  LookupDistrict(provinceCode: any, districtCode: any = '') {
    this.lookupDistrict = [];
    if (this.authenticationToken != null) {
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Utility.District.Inquiry.ByList.Filter.Province.ListActive;
      const newEndpoint = endpoint.url.replace('{province_id}', provinceCode);
      this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((response) => {
        if (response != null) {
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
  }

  LookupSubDistrict(districtCode: any, subdistrictCode: any = '') {
    this.lookupSubDistrict = [];
    if (this.authenticationToken != null) {
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
  }

  ProviceChange(event) {
    this.LookupDistrict(event.value);
    this.LookupSubDistrict(0);
  }

  DistrictChange(event) {
    this.LookupSubDistrict(event.value);
  }


  SubDistrictChange(event) {
    if (this.subDistrictList.length > 0) {
      const findObj = this.subDistrictList.find(obj => obj.code === event.value);
      this.ContentForm.controls['zipcode'].setValue(findObj.zipcode);
    }
  }

  LoadProfileFromSession() {

  }

  breadcrumbLink (link: string) {
    this.router.navigate([link]);
  }

  LoadContentLazy(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  DuplicateAddress(event: any) {
    this.ContentForm.controls['animalOwnerCode'].setValue(this.profileCode);
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
            this.ContentForm.controls['addressNo'].setValue(response.addressNo);
            this.ContentForm.controls['moo'].setValue(response.moo);
            this.ContentForm.controls['soi'].setValue(response.soi);
            this.ContentForm.controls['street'].setValue(response.street);
            this.ContentForm.controls['provinceCode'].setValue(response.provinceCode);
            this.ContentForm.controls['districtCode'].setValue(response.districtCode);
            this.ContentForm.controls['subdistrictCode'].setValue(response.subdistrictCode);
            this.ContentForm.controls['zipcode'].setValue(response.zipcode);

            this.LookupProvince(response.provinceCode);
            this.LookupDistrict(response.provinceCode, response.districtCode);
            this.LookupSubDistrict(response.districtCode, response.subdistrictCode);

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

      this.LookupProvince();
      this.LookupDistrict('');
      this.LookupSubDistrict('');
    }
  }

  ManageAnimalInformation() {
    const initialFormState = { actionForm: 'add'};
    const dialogFormSetting = this.themeConfig.defaultSettings.dialogFormSetting;
    dialogFormSetting.class = dialogFormSetting.class + ' custom-width';
    this.modalRef = this.ModalService.show(
        AnimalInfomationComponent,
        Object.assign({}, dialogFormSetting, { initialFormState })
    );

    /*
    const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
    const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;

    if (this.addressCode !== '') {
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Registration.MySelf.Inquiry.AnimalOwnerAddressById;
      let newEndpoint = endpoint.url.replace('{myself_code}', this.profileCode);
      newEndpoint = endpoint.url.replace('{animal_address_code}', this.addressCode);

      this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((res) => {
        if ( res.contentObj != null) {
          const initialFormState = { actionForm: 'add'};
          const dialogFormSetting = this.themeConfig.defaultSettings.dialogFormSetting;
          dialogFormSetting.class = dialogFormSetting.class + ' custom-width';
          const modalAIFnRef = this.ModalService.show(
              AnimalInfomationComponent,
              Object.assign({}, dialogFormSetting, { initialFormState })
          );

          modalAIFnRef.content.action.subscribe(result => {
            alert(1);
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
      initialState.description = 'กรุณาบันทึกข้อมูลลักษณะการเลี้ยงสัตว์ให้เรียบร้อยก่อน';
      const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
    }
    */
  }

  LookupShelterChange(event: any) {

  }

  LookupHusbandryChange(event: any) {

  }
}
