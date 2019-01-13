import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation, Inject } from '@angular/core';
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
import { Registration } from './../../../api/registration';

@Component({
  selector: 'app-clinic-register',
  templateUrl: './clinic.register.component.html',
  styleUrls: ['./clinic.register.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CallApiService]
})
export class ClinicRegisterComponent implements OnInit {
  SummaryReport: any = {};

  modalRef: BsModalRef;
  userProfile: any;
  animalOwnerProfileCode: any;
  agentCode: any;

  SearchForm: FormGroup;
  ContentForm: FormGroup;
  authenticationToken: any;

  // lookup
  titleList: any = [];
  provinceList: any = [];
  districtList: any = [];
  subDistrictList: any = [];
  titleOtherBoolean: Boolean = false;

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

  // TAB
  tab: any = 'clinic-information';

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
      if (params['tab']) {
        this.tab = params['tab'];
      }
    });
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
    this.LoadAgentProfile();
    this.LoadSummaryRegistration();
  }

  LoadSummaryRegistration () {
    this.SummaryReport = {
      RegistrationTotel: 0,
      RegistrationDisplayTotel: 0,
      RegistrationDogTotel: 0,
      RegistrationCatTotel: 0,
    };

    if (this.authenticationToken != null) {
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Registration.Summary.AnimalRegistrationAmount;
      const newEndpoint = endpoint.url;
      this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((response) => {
        if (response !== null) {
          const findDogObj = response.animalTypeSummaryResponse.find(obj => obj.animalTypeCode === '5700c644-87af-4ea5-a566-ed6928b78b96');
          const findCatObj = response.animalTypeSummaryResponse.find(obj => obj.animalTypeCode === '2233da0f-76f9-4b6c-93e6-415f53806a94');

          this.SummaryReport.RegistrationDisplayTotel = response.animalRegistrationTotal;
          this.SummaryReport.RegistrationDogTotel = findDogObj.amount;
          this.SummaryReport.RegistrationCatTotel = findCatObj.amount;

        }
      }).catch((error) => {
        this.lookupDistrict = [];
      });
    }
  }


  LoadConfigForm() {
    this.ContentForm = new FormGroup({
      code: new FormControl(''),
      titleCode: new FormControl(''),
      titleOther: new FormControl(''),
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mobileNumber: new FormControl('', Validators.required),
      licenseId: new FormControl('', Validators.required),
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

  LoadProfileFromSession() {
    if (this.authenticationToken != null) {
      const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
      const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = User.Profile.Inquiry;
      this.Api.callWithOutScope(endpoint.url, endpoint.method, endpoint.param, 'Authorization', authorization).then((response) => {
        this.LoadContentObjToForm(response, 'LoadProfileFormSession');
      }).catch((error) => {
        initialState.status = 'error';
        initialState.title = error.error.error.message;
        initialState.description = error.error.error.description;
        this.modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
      });
    }
  }

  LoadContentObjToForm(contentObj: any, actionState: any) {
    if (actionState === 'LoadProfileFormSession') {
      this.ContentForm.controls['titleCode'].setValue(contentObj.title);
      this.ContentForm.controls['titleOther'].setValue(contentObj.titleOther);
      this.ContentForm.controls['name'].setValue(contentObj.name);
      this.ContentForm.controls['licenseId'].setValue(contentObj.licenseId);
      this.ContentForm.controls['mobileNumber'].setValue(contentObj.mobileNumber);
      this.ContentForm.controls['email'].setValue(contentObj.email);
      this.ContentForm.controls['addressNo'].setValue(contentObj.addressNo);
      this.ContentForm.controls['moo'].setValue(contentObj.moo);
      this.ContentForm.controls['soi'].setValue(contentObj.soi);
      this.ContentForm.controls['street'].setValue(contentObj.street);
      this.ContentForm.controls['provinceCode'].setValue(contentObj.provinceCode);
      this.ContentForm.controls['districtCode'].setValue(contentObj.districtCode);
      this.ContentForm.controls['subdistrictCode'].setValue(contentObj.subdistrictCode);
      this.ContentForm.controls['zipcode'].setValue(contentObj.zipcode);
    }

    if (actionState === 'LoadAgentProfile') {
      this.agentCode = contentObj.code;
      this.ContentForm.controls['titleCode'].setValue(contentObj.titleCode);
      this.ContentForm.controls['titleOther'].setValue(contentObj.titleOther);
      this.ContentForm.controls['name'].setValue(contentObj.name);
      this.ContentForm.controls['licenseId'].setValue(contentObj.licenseNo);
      this.ContentForm.controls['mobileNumber'].setValue(contentObj.mobileNumber);
      this.ContentForm.controls['email'].setValue(contentObj.email);
      this.ContentForm.controls['addressNo'].setValue(contentObj.addressNo);
      this.ContentForm.controls['moo'].setValue(contentObj.moo);
      this.ContentForm.controls['soi'].setValue(contentObj.soi);
      this.ContentForm.controls['street'].setValue(contentObj.street);
      this.ContentForm.controls['provinceCode'].setValue(contentObj.provinceCode);
      this.ContentForm.controls['districtCode'].setValue(contentObj.districtCode);
      this.ContentForm.controls['subdistrictCode'].setValue(contentObj.subdistrictCode);
      this.ContentForm.controls['zipcode'].setValue(contentObj.zipcode);


      this.LoadData((this.pages - 1));
    }

    if (contentObj.provinceCode !== '' && contentObj.provinceCode !== null) {
      this.LookupProvince(contentObj.provinceCode);
    }
    if (contentObj.districtCode !== '' && contentObj.districtCode !== null) {
      this.LookupDistrict(contentObj.provinceCode, contentObj.districtCode);
    }
    if (contentObj.subdistrictCode !== '' && contentObj.subdistrictCode !== null) {
      this.LookupSubDistrict(contentObj.districtCode, contentObj.subdistrictCode);
    }
  }

  LoadLookup() {
   this.LookupProvince();
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

  LoadAgentProfile() {
    if (this.authenticationToken != null) {
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Registration.Agent.Inquiry.AgentProfile;
      this.Api.callWithOutScope(endpoint.url, endpoint.method, {},  'Authorization', authorization).then((res) => {
        if (res.contentObj != null ) {
          this.LoadContentObjToForm(res.contentObj, 'LoadAgentProfile');
        } else {
          this.LoadProfileFromSession();
        }
      }).catch((error) => {
        this.LoadProfileFromSession();
      });
    } else {
      this.LoadProfileFromSession();
    }
  }


  breadcrumbLink (link: string) {
    this.router.navigate([link]);
  }

  tabSelected(tab) {
    this.tab = tab;
  }


  ActionDeleteContent() {}

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


  /* ============ ACTION PAGE ============= */
  LoadData(pages: any) {
    const self = this;
    if (this.authenticationToken != null) {
      const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
      const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Registration.Agent.Inquiry.OwnerProfileList;
      let newEndpoint = endpoint.url.replace('{page_number}', pages);
      newEndpoint = newEndpoint.replace('{agent_code}', this.agentCode);

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

  ContentSave() {
    if (this.authenticationToken != null) {
      const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
      const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;

      if (this.ContentForm.valid) {
        const contentParams = this.ContentForm.value;
        const authorization = 'Bearer ' + this.authenticationToken;
        const endpoint = Registration.Agent.Manage.AgentProfile;

        this.Api.callWithOutScope(endpoint.url, endpoint.method, contentParams,  'Authorization', authorization).then((response) => {
          const res = response;
          if (res.contentObj !== null) {
            this.agentCode = res.contentObj.code;
            initialState.status = 'success';
            initialState.title = res.message;
            initialState.description = res.description;
            const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
            bsModalRefObj.content.action.subscribe(result => {
              if (result.status) {
                if (res.contentObj != null ) {
                  this.LoadContentObjToForm(res.contentObj, 'LoadAgentProfile');
                }
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
            initialState.title = error.error.error.message;
            initialState.description = error.error.error.description;
            const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
        });
      } else {
        initialState.status = 'error';
        initialState.title = 'ข้อความจากระบบ';
        initialState.description = 'กรุณากรอกข้อมูลเจ้าของสัตว์ให้ครบ';
        const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
      }
    } else {
      this.router.navigate(['/login']);
    }
  }

  ContentReset() {
    this.ContentForm.reset();
    this.LoadAgentProfile();
  }

  ManageClinicIndividual(agentCode: any) {
    const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
    const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
    if (agentCode !== '' && agentCode !== undefined) {
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Registration.Agent.Inquiry.AgentProfileByAgentCode;
      const newEndpoint = endpoint.url.replace('{agent_code}', agentCode);
      this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((res) => {
        if (res.contentObj != null) {
          const response = res.contentObj;
          this.router.navigate(['/information/clinic/individual', { agentcode: agentCode}]);
        } else {
          initialState.status = 'error';
          initialState.title = 'ข้อความจากระบบ';
          initialState.description = 'ไม่สามารถเพิ่มข้อมูลเจ้าของสัตว์ได้ เนื่องจากไม่มีข้อมูลในระบบ';
          const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
        }
      }).catch((error) => {
        initialState.status = 'error';
        initialState.title = 'ข้อความจากระบบ';
        initialState.description = 'ไม่สามารถเพิ่มข้อมูลเจ้าของสัตว์ได้ เนื่องจากไม่มีข้อมูลในระบบ';
        const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
      });
    } else {
      initialState.status = 'error';
      initialState.title = 'ข้อความจากระบบ';
      initialState.description = 'กรุณาบันทึกข้อมูลเจ้าของสัตว์ให้เรียบร้อยก่อน';
      const modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
    }
  }


  ActionEditContent(dataContent: any) {
    // tslint:disable-next-line:max-line-length
    this.router.navigate(['/information/clinic/individual', { profilecode: dataContent.code, agentcode: dataContent.registrationAgentCode }]);
  }
}
