import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { CookieService } from 'ngx-cookie-service';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DialogAlertComponent } from './../../components/dialog-alert/dialog.alert.component';
import { ConfigService } from '../../core/config.service';

import { CallApiService } from './../../providers/request.providers';
import { Utility } from './../../api/utility';
import { User } from './../../api/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CallApiService]
})
export class ProfileComponent implements OnInit {
  modalRef: BsModalRef;
  userProfile: any;
  profileForm: FormGroup;
  authenticationToken: any;

  titleList: any = [];
  titleOtherBoolean: Boolean = false;

  lookupTitle: any = [];
  lookupProvince: any = [];
  lookupDistrict: any = [];
  lookupSubDistrict: any = [];

  subDistrictList: any = [];

  constructor(
    private Api: CallApiService,
    private ModalService: BsModalService,
    private themeConfig: ConfigService,
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.LoadSessionPage();
    this.LoadLookup();
    this.LoadConfigForm();
    this.LoadProfileFromSession();
  }

  LoadConfigForm() {
    this.profileForm = new FormGroup({
      title: new FormControl('', Validators.required),
      titleOther: new FormControl(''),
      name: new FormControl('', Validators.required),
      idCard: new FormControl('', Validators.required),
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
      images: new FormControl(''),
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

  DefaultProfileFromSession(userProfile: any) {
    this.profileForm.controls['title'].setValue(userProfile.title);
    this.profileForm.controls['titleOther'].setValue(userProfile.titleOther);
    this.profileForm.controls['name'].setValue(userProfile.name);
    this.profileForm.controls['idCard'].setValue(userProfile.idCard);
    this.profileForm.controls['mobileNumber'].setValue(userProfile.mobileNumber);
    this.profileForm.controls['email'].setValue(userProfile.email);
    this.profileForm.controls['addressNo'].setValue(userProfile.addressNo);
    this.profileForm.controls['moo'].setValue(userProfile.moo);
    this.profileForm.controls['soi'].setValue(userProfile.soi);
    this.profileForm.controls['street'].setValue(userProfile.street);
    this.profileForm.controls['provinceCode'].setValue(userProfile.provinceCode);
    this.profileForm.controls['districtCode'].setValue(userProfile.districtCode);
    this.profileForm.controls['subdistrictCode'].setValue(userProfile.subdistrictCode);
    this.profileForm.controls['zipcode'].setValue(userProfile.zipcode);
    this.profileForm.controls['images'].setValue(userProfile.images);
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
            this.profileForm.controls['title'].setValue(titleCode);
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
            this.profileForm.controls['provinceCode'].setValue(provinceCode);
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
            this.profileForm.controls['districtCode'].setValue(districtCode);
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
            this.profileForm.controls['subdistrictCode'].setValue(subdistrictCode);
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
      this.profileForm.controls['zipcode'].setValue(findObj.zipcode);
    }
  }

  UpdateProfile() {
    const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
    const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
    if (this.profileForm.valid) {
        const contentParams = this.profileForm.value;
        if (contentParams.title !== 'Other') {
          contentParams.titleOther = '';
        }
        const authorization = 'Bearer ' + this.authenticationToken;
        const endpoint = User.Profile.Change;
        this.Api.callWithOutScope(endpoint.url, endpoint.method, contentParams, 'Authorization', authorization).then((response) => {
            const res = response;
            if (res.code === 1) {
              initialState.status = 'success';
              initialState.title = res.message;
              initialState.description = res.description;
              const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
              bsModalRefObj.content.action.subscribe(result => {
                if (result.status) {
                  this.LoadProfileFromSession();
                }
              });
            } else {
              initialState.status = 'error';
              initialState.title = res.message;
              initialState.description = res.description;
              const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
              bsModalRefObj.content.action.subscribe(result => {
                if (result.status) {
                  this.ResetForm();
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
                this.ResetForm();
              }
            });
        });
    } else {
        initialState.status = 'error';
        initialState.title = 'ข้อความจากระบบ';
        initialState.description = 'กรุณากรอกข้อมูลผู้ใช้งานให้ครบ';
        const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
        bsModalRefObj.content.action.subscribe(result => {
          if (result.status) {
            this.ResetForm();
          }
        });
    }
  }

  ResetForm() {
    this.profileForm.reset();
    this.LoadProfileFromSession();
    this.ResetValue();
  }

  ResetValue() {
    this.lookupDistrict = [];
    this.lookupSubDistrict = [];
  }
}
