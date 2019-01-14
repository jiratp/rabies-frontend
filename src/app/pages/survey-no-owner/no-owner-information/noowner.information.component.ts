import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation, Inject } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { CookieService } from 'ngx-cookie-service';

import * as moment from 'moment';
import { LazyLoadEvent } from 'primeng/primeng';

import { ConfigService } from './../../../core/config.service';
import { DialogAlertComponent } from './../../../components/dialog-alert/dialog.alert.component';
import { CallApiService } from './../../../providers/request.providers';
import { Utility } from './../../../api/utility';
import { User } from './../../../api/user';
import { Survey } from './../../../api/survey';

import { SurveyAnimalInformationComponent } from './../survey-animal-information/survey.animal.information.component';

@Component({
  selector: 'app-noowner-information',
  templateUrl: './noowner.information.component.html',
  styleUrls: ['./noowner.information.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CallApiService]
})
export class NoOwnerInformationComponent implements OnInit {
  modalRef: BsModalRef;
  breadcrumbParam: any = {};
  ContentForm: FormGroup;
  authenticationToken: any;
  roundCode: any;
  ownerCode: any;
  actionForm: any;
  titleModal: string;

  svTitleList: any = [];
  svProvinceList: any = [];
  svDistrictList: any = [];
  svSubDistrictList: any = [];

  titleList: any = [];
  animalTypeList: any = [];
  provinceList: any = [];
  districtList: any = [];
  subDistrictList: any = [];

  svTitleOtherBoolean: Boolean = false;
  titleOtherBoolean: Boolean = false;

  lookupSvTitle: any = [];
  lookupSvProvince: any = [];
  lookupSvDistrict: any = [];
  lookupSvSubDistrict: any = [];

  lookupTitle: any = [];
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

  // UPLOAD CONFIG
  uploadedFiles: any[] = [];
  fileToUpload: File = null;

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
        if (params['roundcode']) {
          this.roundCode = params['roundcode'];
        }

        if (params['ownercode']) {
            this.ownerCode = params['ownercode'];
        }
    });

    if ((this.roundCode !== '' && this.roundCode !== undefined) && (this.ownerCode !== '' && this.ownerCode !== undefined)) {
        this.actionForm = 'edit';
    } else if ((this.roundCode === '' || this.roundCode === undefined) || (this.ownerCode === '' || this.ownerCode === undefined)) {
        this.actionForm = 'add';
    }
  }

  ngOnInit() {
    this.breadcrumbParam = {
        roundcode : this.roundCode
    };
    /****** dataTable ******/
    this.pages = 1;
    this.totalRecords = 0;
    this.pageRows = 0;
    this.loading = true;

    this.setupHeader();
    this.LoadConfigCalendar();
    this.LoadConfigForm();
    this.LoadSessionPage();
    this.LoadLookup();
    this.CheckRoundCode();
    this.CheckSurveyCode();
  }

  setupHeader() {
    switch (this.actionForm) {
        case 'add':
            this.titleModal = 'เพิ่มข้อมูลแบบสำรวจสัตว์ไม่มีเจ้าของ';
            break;
        case 'edit':
            this.titleModal = 'แก้ไขข้อมูลแบบสำรวจสัตว์ไม่มีเจ้าของ';
            break;
        default:
            this.titleModal = 'จัดการข้อมูลแบบสำรวจสัตว์ไม่มีเจ้าของ';
    }
  }
  /* ALL PAGE CONFIG */
  LoadConfigCalendar() {
    this.dateTimeFormat = this.themeConfig.defaultSettings.dateTimeFormat;
    this.lacaleTH = this.themeConfig.defaultSettings.lacaleTH;
  }
  LoadConfigForm() {
    this.ContentForm = new FormGroup({
        roundCode: new FormControl(''),
        surveyDate: new FormControl({value: this.dateNow, disabled: true}, Validators.required),
        surveyDateHidden: new FormControl(this.dateNow),
        code: new FormControl(''),
        svTitleCode: new FormControl('', Validators.required),
        svTitleOther: new FormControl(''),
        svName: new FormControl('', Validators.required),
        svEmail: new FormControl(''),
        svMobileNumber: new FormControl(''),
        svDepartmentCode : new FormControl(''),
        svPlaceName: new FormControl('', Validators.required),
        svProvinceCode: new FormControl('', Validators.required),
        svDistrictCode: new FormControl('', Validators.required),
        svSubdistrictCode: new FormControl('', Validators.required),
        svZipcode: new FormControl('', Validators.required),

        titleCode: new FormControl('', Validators.required),
        titleOther: new FormControl(''),
        name: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        mobileNumber: new FormControl('', Validators.required),
        addressNo: new FormControl(''),
        moo: new FormControl(''),
        soi: new FormControl(''),
        street: new FormControl(''),
        provinceCode: new FormControl(''),
        districtCode: new FormControl(''),
        subdistrictCode: new FormControl(''),
        zipcode: new FormControl(''),

        isSameAddress: new FormControl(false),
        fnAddressNo: new FormControl(''),
        fnMoo: new FormControl(''),
        fnSoi: new FormControl(''),
        fnStreet: new FormControl(''),
        fnProvinceCode: new FormControl(''),
        fnDistrictCode: new FormControl(''),
        fnSubdistrictCode: new FormControl(''),
        fnZipcode: new FormControl(''),
        surveyNoOwnerInformationCode: new FormControl(''),
        surveyCode: new FormControl('')
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

  breadcrumbLink (link: string, params: any = null) {
      if (params !== null) {
        this.router.navigate([link, params]);
      } else {
        this.router.navigate([link]);
      }
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
      this.LookupSvTitle();
      this.LookupTitle();

      this.LookupSvProvince();
  }

  /* LOOK UP */
  LookupSvTitle(titleCode: any = '') {
    this.lookupSvTitle = [];
    if (this.svTitleList.length === 0) {
      if (this.authenticationToken != null) {
        const authorization = 'Bearer ' + this.authenticationToken;
        const endpoint = Utility.Title.Inquiry.ByList.ListActive;
        this.Api.callWithOutScope(endpoint.url, endpoint.method, {},  'Authorization', authorization).then((response) => {
          if (response != null) {
            this.svTitleList = response;
            response.forEach(element => {
              this.lookupSvTitle.push({ value: element.code, label: element.nameTH });
            });
            if (titleCode !== '') {
              this.ContentForm.controls['svTitleCode'].setValue(titleCode);
            }
          } else {
            this.lookupSvTitle = [];
          }
        }).catch((error) => {
          this.lookupSvTitle = [];
        });
      } else {
        this.lookupSvTitle = [];
      }
    } else {
      this.svTitleList.forEach(element => {
        this.lookupSvTitle.push({ value: element.code, label: element.nameTH });
      });
      if (titleCode !== '') {
        this.ContentForm.controls['svTitleCode'].setValue(titleCode);
      }
    }
}
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
LookupSvProvince(provinceCode: any = '') {
    if (this.svProvinceList.length === 0) {
      if (this.authenticationToken != null) {
        this.lookupSvProvince = [];
        const authorization = 'Bearer ' + this.authenticationToken;
        const endpoint = Utility.Province.Inquiry.ByList.ListActive;
        this.Api.callWithOutScope(endpoint.url, endpoint.method, {},  'Authorization', authorization).then((response) => {
          if (response != null) {
            this.svProvinceList = response;
            response.forEach(element => {
              this.lookupSvProvince.push({ value: element.code, label: element.nameTH });
            });
            if (provinceCode !== '') {
              this.ContentForm.controls['svProvinceCode'].setValue(provinceCode);
            }
          } else {
            this.lookupSvProvince = [];
          }
        }).catch((error) => {
          this.lookupSvProvince = [];
        });
      } else {
        this.lookupSvProvince = [];
      }
    } else {
      this.lookupSvProvince = [];
      this.svProvinceList.forEach(element => {
        this.lookupSvProvince.push({ value: element.code, label: element.nameTH });
      });
      if (provinceCode !== '') {
        this.ContentForm.controls['svProvinceCode'].setValue(provinceCode);
      }
    }
  }
  LookupSvDistrict(provinceCode: any, districtCode: any = '') {
    if (this.svDistrictList.length === 0) {
      if (this.authenticationToken != null) {
        this.lookupSvDistrict = [];
        const authorization = 'Bearer ' + this.authenticationToken;
        const endpoint = Utility.District.Inquiry.ByList.Filter.Province.ListActive;
        const newEndpoint = endpoint.url.replace('{province_id}', provinceCode);
        this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((response) => {
          if (response != null) {
            this.svDistrictList = response;
            response.forEach(element => {
              this.lookupSvDistrict.push({ value: element.code, label: element.nameTH });
            });
            if (districtCode !== '') {
              this.ContentForm.controls['svDistrictCode'].setValue(districtCode);
            }
          } else {
            this.lookupSvDistrict = [];
          }
        }).catch((error) => {
          this.lookupSvDistrict = [];
        });
      } else {
        this.lookupSvDistrict = [];
      }
    } else {
      this.lookupSvDistrict = [];
      this.svDistrictList.forEach(element => {
        this.lookupSvDistrict.push({ value: element.code, label: element.nameTH });
      });
      if (districtCode !== '') {
        this.ContentForm.controls['svDistrictCode'].setValue(districtCode);
      }
    }
  }
  LookupSvSubDistrict(districtCode: any, subdistrictCode: any = '') {
    if (this.svSubDistrictList.length === 0) {
      if (this.authenticationToken != null) {
        this.lookupSvSubDistrict = [];
        const authorization = 'Bearer ' + this.authenticationToken;
        const endpoint = Utility.SubDistrict.Inquiry.ByList.Filter.District.ListActive;
        const newEndpoint = endpoint.url.replace('{district_id}', districtCode);
        this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((response) => {
          if (response != null) {
            this.svSubDistrictList = response;
            response.forEach(element => {
              this.lookupSvSubDistrict.push({ value: element.code, label: element.nameTH });
            });
            if (subdistrictCode !== '') {
              this.ContentForm.controls['svSubdistrictCode'].setValue(subdistrictCode);
            }
          } else {
            this.lookupSvSubDistrict = [];
          }
        }).catch((error) => {
          this.lookupSvSubDistrict = [];
        });
      } else {
        this.lookupSvSubDistrict = [];
      }
    } else {
      this.lookupSvSubDistrict = [];
      this.svSubDistrictList.forEach(element => {
        this.lookupSvSubDistrict.push({ value: element.code, label: element.nameTH });
      });
      if (subdistrictCode !== '') {
        this.ContentForm.controls['svSubdistrictCode'].setValue(subdistrictCode);
      }
    }
  }
  LookupSvTitleChange(event) {
    if (this.svTitleList.length > 0) {
      const findObj = this.svTitleList.find(obj => obj.code === event.value);
      this.svTitleOtherBoolean = findObj.hasExtValue;
    }
  }
  LookupTitleChange(event) {
      if (this.titleList.length > 0) {
        const findObj = this.titleList.find(obj => obj.code === event.value);
        this.titleOtherBoolean = findObj.hasExtValue;
      }
  }
  LookupSvProviceChange(event) {
    this.svDistrictList = [];
    this.svSubDistrictList = [];
    this.LookupSvDistrict(event.value);
    this.LookupSvSubDistrict(0);
    this.ContentForm.controls['svDistrictCode'].setValue('');
    this.ContentForm.controls['svSubdistrictCode'].setValue('');
  }
  LookupSvDistrictChange(event) {
      this.svSubDistrictList = [];
      this.LookupSvSubDistrict(event.value);
      this.ContentForm.controls['svSubdistrictCode'].setValue('');
  }
  LookupSvSubDistrictChange(event) {
      if (this.svSubDistrictList.length > 0) {
          const findObj = this.svSubDistrictList.find(obj => obj.code === event.value);
          this.ContentForm.controls['svZipcode'].setValue(findObj.zipcode);
      }
  }
  /* VALIDATED PARAMS */
  CheckRoundCode() {
    const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
    const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
    if (this.authenticationToken != null && this.roundCode !== '') {
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Survey.Round.Inquiry.ById;
      const newEndpoint = endpoint.url.replace('{content_id}', this.roundCode);
      this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((res) => {
        if (res == null) {
          initialState.status = 'error';
          initialState.title = 'ข้อความจากระบบ';
          initialState.description = 'ไม่มีข้อมูลรายการขึ้นทะเบียนสัตว์ในระบบ';
          const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
          modalRef.content.action.subscribe(result => {
            this.router.navigate(['/survey/animal-no-owner']);
          });
        } else {

          if (res.roundStatus !== 'TIMEOUT') {
            this.roundCode = res.code;
          } else {
            initialState.status = 'error';
            initialState.title = 'ข้อความจากระบบ';
            initialState.description = 'รายการขึ้นทะเบียนสัตว์นี้ สิ้นสุดระยะเวลาการลงทะเบียนแล้ว';
            const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
            modalRef.content.action.subscribe(result => {
              this.router.navigate(['/survey/animal-no-owner']);
            });
          }
        }
      }).catch((error) => {
        initialState.status = 'error';
        initialState.title = 'ข้อความจากระบบ';
        initialState.description = 'ไม่มีข้อมูลรายการขึ้นทะเบียนสัตว์ในระบบ';
        const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
        modalRef.content.action.subscribe(result => {
          this.router.navigate(['/survey/animal-no-owner']);
        });
      });
    } else {
      initialState.status = 'error';
      initialState.title = 'ข้อความจากระบบ';
      initialState.description = 'ไม่มีข้อมูลรายการขึ้นทะเบียนสัตว์ในระบบ';
      const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
      modalRef.content.action.subscribe(result => {
        this.router.navigate(['/survey/animal-no-owner']);
      });
    }
  }

  CheckSurveyCode() {
    const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
    const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
    if (this.authenticationToken != null && this.ownerCode !== '' && this.ownerCode !== undefined) {
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Survey.NoOwner.Inquiry.NoOwnerAdressByNoOwnerCode;
      const newEndpoint = endpoint.url.replace('{owner_code}', this.ownerCode);
      this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((res) => {
        if (res.contentObj !== null) {
          this.actionForm = 'edit';
          this.LoadSurveyInformationField(res.contentObj, 'LoadSurveyInformation');
        } else {
          this.actionForm = 'add';
        }
      }).catch((error) => {
        initialState.status = 'error';
        initialState.title = 'ข้อความจากระบบ';
        initialState.description = 'ไม่มีข้อมูลรายการขึ้นทะเบียนสัตว์ในระบบ';
        const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
        modalRef.content.action.subscribe(result => {
          this.router.navigate(['/survey/animal-no-owner/owner-information-list', this.breadcrumbParam]);
        });
      });
    }
  }

  LoadSurveyInformationField (responseObj: any, pagesAction: any) {
    if (pagesAction === 'LoadSurveyInformation' && responseObj !== null) {
      this.ownerCode = responseObj.surveyCode;
      this.roundCode = responseObj.roundCode;

      this.ContentForm.controls['code'].setValue(responseObj.surveyCode);
      this.ContentForm.controls['surveyCode'].setValue(responseObj.surveyCode);
      this.ContentForm.controls['surveyNoOwnerInformationCode'].setValue(responseObj.surveyNoOwnerInformationCode);
      this.ContentForm.controls['roundCode'].setValue(responseObj.roundCode);

      this.ContentForm.controls['surveyDate'].setValue(responseObj.surveyDateHidden);
      this.ContentForm.controls['surveyDateHidden'].setValue(responseObj.surveyDateHidden);

      this.ContentForm.controls['svPlaceName'].setValue(responseObj.svPlaceName);
      this.ContentForm.controls['svDepartmentCode'].setValue(responseObj.svDepartmentCode);
      this.ContentForm.controls['svMobileNumber'].setValue(responseObj.svMobileNumber);
      this.ContentForm.controls['svEmail'].setValue(responseObj.svEmail);
      this.ContentForm.controls['svName'].setValue(responseObj.svName);
      this.ContentForm.controls['svTitleCode'].setValue(responseObj.svTitleCode);

      if (responseObj.svTitleCode === 'Other') {
        this.svTitleOtherBoolean = true;
        this.ContentForm.controls['svTitleOther'].setValue(responseObj.svTitleOther);
      }

      this.ContentForm.controls['svProvinceCode'].setValue(responseObj.svProvinceCode);
      this.ContentForm.controls['svDistrictCode'].setValue(responseObj.svDistrictCode);
      this.ContentForm.controls['svSubdistrictCode'].setValue(responseObj.svSubdistrictCode);
      this.ContentForm.controls['svZipcode'].setValue(responseObj.svZipcode);

      this.ContentForm.controls['titleCode'].setValue(responseObj.titleCode);
      if (responseObj.titleCode === 'Other') {
        this.titleOtherBoolean = true;
        this.ContentForm.controls['titleOther'].setValue(responseObj.titleOther);
      }
      this.ContentForm.controls['name'].setValue(responseObj.name);
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

      this.ContentForm.controls['isSameAddress'].setValue(responseObj.isSameAddress);
      this.ContentForm.controls['fnAddressNo'].setValue(responseObj.fnAddressNo);
      this.ContentForm.controls['fnMoo'].setValue(responseObj.fnMoo);
      this.ContentForm.controls['fnSoi'].setValue(responseObj.fnSoi);
      this.ContentForm.controls['fnStreet'].setValue(responseObj.fnStreet);
      this.ContentForm.controls['fnProvinceCode'].setValue(responseObj.fnProvinceCode);
      this.ContentForm.controls['fnDistrictCode'].setValue(responseObj.fnDistrictCode);
      this.ContentForm.controls['fnSubdistrictCode'].setValue(responseObj.fnSubdistrictCode);
      this.ContentForm.controls['fnZipcode'].setValue(responseObj.fnZipcode);

      this.LookupSvTitle(responseObj.svTitleCode);
      this.LookupSvProvince(responseObj.svProvinceCode);
      this.LookupSvDistrict(responseObj.svProvinceCode, responseObj.svDistrictCode);
      this.LookupSvSubDistrict(responseObj.svDistrictCode, responseObj.svSubdistrictCode);
      this.LookupTitle(responseObj.titleCode);

      this.LoadData((this.pages - 1));
    }
  }
  ContentReset() {
      this.ContentForm.reset();
      this.svTitleOtherBoolean = false;
      this.titleOtherBoolean = false;
  }
  ContentSave() {
      const self = this;
      if (this.authenticationToken != null) {
        const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
        const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
        if (this.ContentForm.valid) {
          const contentParams = this.ContentForm.value;
          contentParams.roundCode = this.roundCode;
          const authorization = 'Bearer ' + this.authenticationToken;
          const endpoint = Survey.NoOwner.Manage.NoOwnerInformation;
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
                } else {
                  this.ContentReset();
                  this.LoadSurveyInformationField(res.contentObj, 'LoadSurveyInformation');
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
          initialState.description = 'กรุณากรอกข้อมูลแบบสำรวจสัตว์ไม่มีเจ้าของให้ครบ';
          const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
        }
      }
  }
  ActionEditContent(value: any) {
    const self = this;
      let initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
      const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
      if (this.ownerCode !== '' && this.ownerCode !== undefined) {
        initialState = this.themeConfig.defaultSettings.formInitialStateSetting;
        const dialogFormSetting = this.themeConfig.defaultSettings.dialogFormSetting;
        dialogFormSetting.class = dialogFormSetting.class + ' custom-width';
        initialState.actionFormObj = 'edit';
        initialState.moduleContent = {
          method: 'survey-on-owner',
          endpoint: Survey.NoOwner.Manage.AnimalInformation,
          recordObj: value,
          contentObj : {
            surveyCode : value.surveyInformationCode,
            surveyRoundCode : self.roundCode,
            surveyNoOwnerInformationCode : value.surveyNoOwnerInformationCode
          }
        };
        // tslint:disable-next-line:max-line-length
        this.modalRef = this.ModalService.show(SurveyAnimalInformationComponent, Object.assign({}, dialogFormSetting, { initialState }));
        this.modalRef.content.action.subscribe(result => {
          if (result.status) {
            this.LoadData((this.pages - 1));
          }
        });
      } else {
        initialState.status = 'error';
        initialState.title = 'ข้อความจากระบบ';
        initialState.description = 'กรุณาบันทึกข้อมูลแบบสำรวจสัตว์ไม่มีเจ้าของให้เรียบร้อยก่อน';
        const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
      }
  }
  ManageSurveyAnimalInformation() {
    let initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
    const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
    if (this.ownerCode !== '' && this.ownerCode !== undefined) {
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Survey.NoOwner.Inquiry.NoOwnerAdressByNoOwnerCode;
      const newEndpoint = endpoint.url.replace('{owner_code}', this.ownerCode);
      this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((res) => {
        if ( res.contentObj != null) {
          initialState = this.themeConfig.defaultSettings.formInitialStateSetting;
          const dialogFormSetting = this.themeConfig.defaultSettings.dialogFormSetting;
          dialogFormSetting.class = dialogFormSetting.class + ' custom-width';
          initialState.actionFormObj = 'add';
          initialState.moduleContent = {
            method: 'survey-no-owner',
            endpoint: Survey.NoOwner.Manage.AnimalInformation,
            recordObj: null,
            contentObj : {
              surveyCode : res.contentObj.surveyCode,
              surveyRoundCode : res.contentObj.roundCode,
              surveyNoOwnerInformationCode : res.contentObj.surveyNoOwnerInformationCode
            }
          };

          // tslint:disable-next-line:max-line-length
          this.modalRef = this.ModalService.show(SurveyAnimalInformationComponent, Object.assign({}, dialogFormSetting, { initialState }));
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
      initialState.description = 'กรุณาบันทึกข้อมูลแบบสำรวจสัตว์ไม่มีเจ้าของให้เรียบร้อยก่อน';
      const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
    }
  }

  /* PAGE ACTION */
  LoadData(pages: any) {
    const self = this;
    if (this.authenticationToken != null) {
      const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
      const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Survey.NoOwner.Inquiry.ListAnimalInformationByNoOwnerCode;
      let newEndpoint = endpoint.url.replace('{page_number}', pages);
      newEndpoint = newEndpoint.replace('{owner_code}', this.ownerCode);
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
