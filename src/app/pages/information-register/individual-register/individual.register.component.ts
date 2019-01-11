import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation, Inject } from '@angular/core';
import { Router } from '@angular/router';
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
import { Registration } from './../../../api/registration';

@Component({
  selector: 'app-individual-register',
  templateUrl: './individual.register.component.html',
  styleUrls: ['./individual.register.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CallApiService]
})
export class IndividualRegisterComponent implements OnInit {
  modalRef: BsModalRef;
  userProfile: any;
  animalOwnerProfileCode: any;

  IDVInfoForm: FormGroup;
  authenticationToken: any;

  // lookup
  titleList: any = [];
  titleOtherBoolean: Boolean = false;

  lookupTitle: any = [];
  lookupProvince: any = [];
  lookupDistrict: any = [];
  lookupSubDistrict: any = [];

  subDistrictList: any = [];

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
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private cookieService: CookieService
  ) { }

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
    this.LoadAnimalOwnerProfile();
    this.LoadData((this.pages - 1));
  }

  LoadConfigForm() {
    this.IDVInfoForm = new FormGroup({
      code: new FormControl(''),
      titleCode: new FormControl('', Validators.required),
      titleOther: new FormControl(''),
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mobileNumber: new FormControl('', Validators.required),
      idCard: new FormControl('', Validators.required),
      addressNo: new FormControl('', Validators.required),
      moo: new FormControl(''),
      soi: new FormControl(''),
      street: new FormControl(''),
      provinceCode: new FormControl('', Validators.required),
      districtCode: new FormControl('', Validators.required),
      subdistrictCode: new FormControl('', Validators.required),
      zipcode: new FormControl('', Validators.required),
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

  LoadProfileFromSession() {
    if (this.authenticationToken != null) {
      const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
      const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = User.Profile.Inquiry;
      this.Api.callWithOutScope(endpoint.url, endpoint.method, endpoint.param, 'Authorization', authorization).then((response) => {
        this.LoadDependencyLookup(response);
        this.DefaultProfileFromSession(response);
      }).catch((error) => {
        initialState.status = 'error';
        initialState.title = error.error.error.message;
        initialState.description = error.error.error.description;
        this.modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
      });
    }
  }

  LoadConfigCalendar() {
    this.dateTimeFormat = this.themeConfig.defaultSettings.dateTimeFormat;
    this.lacaleTH = this.themeConfig.defaultSettings.lacaleTH;
  }

  LoadDependencyLookup(userProfile) {
    if (userProfile.title !== '') {
      this.LookupTitle(userProfile.title);
    }

    if (userProfile.provinceCode !== '') {
      this.LookupProvince(userProfile.provinceCode);
    }

    if (userProfile.districtCode !== '') {
      this.LookupDistrict(userProfile.provinceCode, userProfile.districtCode);
    }

    if (userProfile.subdistrictCode !== '') {
      this.LookupSubDistrict(userProfile.districtCode, userProfile.subdistrictCode);
    }

    if (userProfile.title === 'Other') {
      this.titleOtherBoolean = true;
    }
  }

  LoadData(pages: any) {
    if (this.authenticationToken != null) {
      const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
      const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Registration.MySelf.Inquiry.AnimalOwnerAddress;
      let newEndpoint = endpoint.url.replace('{page_number}', pages);
      newEndpoint = newEndpoint.replace('{myself_code}', this.animalOwnerProfileCode);

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

  LoadAnimalOwnerProfile() {
    if (this.authenticationToken != null) {
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Registration.MySelf.Inquiry.AnimalOwnerProfile;
      this.Api.callWithOutScope(endpoint.url, endpoint.method, {},  'Authorization', authorization).then((res) => {
        if(res.contentObj != null){
          let response = res.contentObj;
          this.animalOwnerProfileCode = response.code;
          this.IDVInfoForm.controls['code'].setValue(response.code);
          this.IDVInfoForm.controls['titleCode'].setValue(response.titleCode);
          this.IDVInfoForm.controls['titleOther'].setValue(response.titleOther);
          this.IDVInfoForm.controls['name'].setValue(response.name);
          this.IDVInfoForm.controls['idCard'].setValue(response.idCard);
          this.IDVInfoForm.controls['mobileNumber'].setValue(response.mobileNumber);
          this.IDVInfoForm.controls['email'].setValue(response.email);
          this.IDVInfoForm.controls['addressNo'].setValue(response.addressNo);
          this.IDVInfoForm.controls['moo'].setValue(response.moo);
          this.IDVInfoForm.controls['soi'].setValue(response.soi);
          this.IDVInfoForm.controls['street'].setValue(response.street);
          this.IDVInfoForm.controls['provinceCode'].setValue(response.provinceCode);
          this.IDVInfoForm.controls['districtCode'].setValue(response.districtCode);
          this.IDVInfoForm.controls['subdistrictCode'].setValue(response.subdistrictCode);
          this.IDVInfoForm.controls['zipcode'].setValue(response.zipcode);

          if (response.titleCode !== '' && response.titleCode !== null) {
            this.LookupTitle(response.titleCode);
          }
      
          if (response.provinceCode !== '' && response.provinceCode !== null) {
            this.LookupProvince(response.provinceCode);
          }
      
          if (response.districtCode !== '' && response.districtCode !== null) {
            this.LookupDistrict(response.provinceCode, response.districtCode);
          }
      
          if (response.subdistrictCode !== '' && response.subdistrictCode !== null) {
            this.LookupSubDistrict(response.districtCode, response.subdistrictCode);
          }
      
          if (response.titleCode === 'Other') {
            this.titleOtherBoolean = true;
          }
          
        }else{
          this.LoadProfileFromSession();
        }



      }).catch((error) => {
        this.LoadProfileFromSession();
      });
    } else {
      this.LoadProfileFromSession();
    }
  }

  DefaultProfileFromSession(userProfile: any) {
    this.IDVInfoForm.controls['titleCode'].setValue(userProfile.title);
    this.IDVInfoForm.controls['titleOther'].setValue(userProfile.titleOther);
    this.IDVInfoForm.controls['name'].setValue(userProfile.name);
    this.IDVInfoForm.controls['idCard'].setValue(userProfile.idCard);
    this.IDVInfoForm.controls['mobileNumber'].setValue(userProfile.mobileNumber);
    this.IDVInfoForm.controls['email'].setValue(userProfile.email);
    this.IDVInfoForm.controls['addressNo'].setValue(userProfile.addressNo);
    this.IDVInfoForm.controls['moo'].setValue(userProfile.moo);
    this.IDVInfoForm.controls['soi'].setValue(userProfile.soi);
    this.IDVInfoForm.controls['street'].setValue(userProfile.street);
    this.IDVInfoForm.controls['provinceCode'].setValue(userProfile.provinceCode);
    this.IDVInfoForm.controls['districtCode'].setValue(userProfile.districtCode);
    this.IDVInfoForm.controls['subdistrictCode'].setValue(userProfile.subdistrictCode);
    this.IDVInfoForm.controls['zipcode'].setValue(userProfile.zipcode);
  }

  LoadLookup() {
   this.LookupTitle();
   this.LookupProvince();
  }


  LookupTitle(titleCode: any = '') {
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
            this.IDVInfoForm.controls['title'].setValue(titleCode);
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
            this.IDVInfoForm.controls['provinceCode'].setValue(provinceCode);
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
            this.IDVInfoForm.controls['districtCode'].setValue(districtCode);
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
            this.IDVInfoForm.controls['subdistrictCode'].setValue(subdistrictCode);
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

  TitleChange(event) {
    if (this.titleList.length > 0) {
      const findObj = this.titleList.find(obj => obj.code === event.value);
      this.titleOtherBoolean = findObj.hasExtValue;
    }
  }

  SubDistrictChange(event) {
    if (this.subDistrictList.length > 0) {
      const findObj = this.subDistrictList.find(obj => obj.code === event.value);
      this.IDVInfoForm.controls['zipcode'].setValue(findObj.zipcode);
    }
  }

  // ========================== End of Load Profile && Config Lookup ========================== //

  ManageAnimalAddress(animalOwnerProfileCode: any) {
    const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
    const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
        
    if(animalOwnerProfileCode != ""){
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Registration.MySelf.Inquiry.AnimalOwnerProfileById;
      const newEndpoint = endpoint.url.replace('{animal_owner_profile_code}', animalOwnerProfileCode);
      this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((res) => {
        if(res.contentObj != null){
          let response = res.contentObj;
          this.router.navigate(['/information/individual/register',{profileCode: animalOwnerProfileCode}]);
        }else{
          initialState.status = 'error';
          initialState.title = "ข้อความจากระบบ";
          initialState.description = "ไม่สามารถเพิ่มข้อมูลสถานที่เลี้ยงสัตว์ได้ เนื่องจากไม่มีข้อมูลในระบบ";
          const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));    
        }
      }).catch((error) => {
        initialState.status = 'error';
        initialState.title = "ข้อความจากระบบ";
        initialState.description = "ไม่สามารถเพิ่มข้อมูลสถานที่เลี้ยงสัตว์ได้ เนื่องจากไม่มีข้อมูลในระบบ";
        const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));  
      });
    }else{
      initialState.status = 'error';
      initialState.title = "ข้อความจากระบบ";
      initialState.description = "กรุณาบันทึกข้อมูลเจ้าของสัตว์ให้เรียบร้อยก่อน";
      const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
    }
  }

  breadcrumbLink (link: string) {
    this.router.navigate([link]);
  }

  ActionEditContent(dataContent: any) {
    this.router.navigate(['/information/individual/register',{profileCode: dataContent.registrationAnimalOwnerCode, addressCode: dataContent.code}]);
  }

  ActionDeleteContent(){
    
  }

  LoadContentLazy(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
