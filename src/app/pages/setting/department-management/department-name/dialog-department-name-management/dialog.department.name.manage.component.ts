import { Component, OnInit, Output, Input, EventEmitter, ViewEncapsulation, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/primeng';
import { SelectItem } from 'primeng/api';
import * as moment from 'moment';

import { ConfigService } from './../../../../../core/config.service';


import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { CookieService } from 'ngx-cookie-service';

import { DialogAlertComponent } from './../../../../../components/dialog-alert/dialog.alert.component';
import { CallApiService } from './../../../../../providers/request.providers';
import { Utility } from './../../../../../api/utility';
import { User } from './../../../../../api/user';
import { Department } from '../../../../../api/department';

@Component({
  selector: 'app-dialog-department-name-manage',
  templateUrl: './dialog.department.name.manage.component.html',
  styleUrls: ['./dialog.department.name.manage.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CallApiService]
})
export class DialogDepartmentNameManageComponent implements OnInit {
  @Input() actionForm: string;
  @Input() dataObj: any;
  @Output() action = new EventEmitter();

  dateTimeFormat: string;
  dateNow: string = moment().format('DD/MM/YYYY');
  lacaleTH: any;

  ContentForm: FormGroup;
  titleModal: string;

  authenticationToken: any;

  PageLoadData: any = null;
  defaultIsActive: Boolean = true;

  subDistrictList: any = [];
  departmentTypeObj: any = {};

  lookupDepartmentTypeCode: any = [];
  lookupProvinceCode: any = [];
  lookupDistrictCode: any = [];
  lookupSubDistrictCode: any = [];

  constructor(
    private Api: CallApiService,
    public modalRef: BsModalRef,
    private ModalService: BsModalService,
    private themeConfig: ConfigService,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    this.LoadConfigCalendar();
    this.LoadConfigForm();
    this.LoadSessionPage();
    this.LoadModalHeader();
    this.LoadLookup();
  }

  LoadConfigCalendar() {
    this.dateTimeFormat = this.themeConfig.defaultSettings.dateTimeFormat;
    this.lacaleTH = this.themeConfig.defaultSettings.lacaleTH;
  }

  LoadConfigForm() {
    this.ContentForm = new FormGroup({
      departmentTypeCode: new FormControl('', Validators.required),
      code: new FormControl(''),
      agencyCode: new FormControl('', Validators.required),
      nameTH: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      provinceCode: new FormControl(''),
      districtCode: new FormControl(''),
      subdistrictCode: new FormControl(''),
      isActive: new FormControl(this.defaultIsActive , Validators.required),
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

  LoadModalHeader() {
    switch (this.actionForm) {
      case 'add':
        this.titleModal = 'เพิ่มข้อมูลรายชื่อหน่วยงาน';
        break;
      case 'edit':
        this.titleModal = 'แก้ไขข้อมูลรายชื่อหน่วยงาน';
        this.ContentSelect(this.dataObj, false);
        break;
      case 'view':
        this.titleModal = 'แสดงข้อมูลรายชื่อหน่วยงาน';
        this.ContentSelect(this.dataObj, true);
        break;
      default:
        this.titleModal = 'จัดการข้อมูลรายชื่อหน่วยงาน';
    }
  }


  LoadLookup() {
    this.LookupDepartmentType();
    this.LookupProvince();
  }

  modalClose() {
    this.modalRef.hide();
    this.action.emit({ status: false, process: false});
  }

  ContentSelect(contentObj: any, disabled: boolean) {
    if (this.authenticationToken != null) {
      const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
      const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Department.Name.Inquiry.ById;
      const newEndpoint = endpoint.url.replace('{content_id}', contentObj.code);

      this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((response) => {
        const res = response;
        this.PageLoadData = res;
        this.ContentForm.controls['code'].setValue(res.code);
        this.ContentForm.controls['agencyCode'].setValue(res.agencyCode);
        this.ContentForm.controls['nameTH'].setValue(res.nameTH);
        this.ContentForm.controls['description'].setValue(res.description);
        // this.ContentForm.controls['provinceCode'].setValue(res.provinceCode);
        // this.ContentForm.controls['districtCode'].setValue(res.districtCode);
        // this.ContentForm.controls['subdistrictCode'].setValue(res.subdistrictCode);
        this.ContentForm.controls['isActive'].setValue(res.isActive);

        if (res.departmentType != null) {
          this.ContentForm.controls['departmentTypeCode'].setValue(res.departmentType.code);
          this.LookupDepartmentType(res.departmentType.code);
        }

        if (res.province != null) {
          this.ContentForm.controls['provinceCode'].setValue(res.province.code);
          this.LookupProvince(res.province.code);
        }

        if (res.district != null) {
          this.ContentForm.controls['districtCode'].setValue(res.district.code);
          this.LookupDistrict(res.province.code, res.district.code);
        }

        if (res.subdistrict != null) {
          this.ContentForm.controls['subdistrictCode'].setValue(res.subdistrict.code);
          this.LookupSubDistrict(res.district.code, res.subdistrict.code);
        }

        if (disabled) {
          this.ContentForm.controls['code'].disable();
          this.ContentForm.controls['agencyCode'].disable();
          this.ContentForm.controls['nameTH'].disable();
          this.ContentForm.controls['description'].disable();
          this.ContentForm.controls['provinceCode'].disable();
          this.ContentForm.controls['districtCode'].disable();
          this.ContentForm.controls['subdistrictCode'].disable();
          this.ContentForm.controls['isActive'].disable();
          this.ContentForm.controls['departmentTypeCode'].disable();
        } else {
          this.ContentForm.controls['code'].enable();
          this.ContentForm.controls['agencyCode'].enable();
          this.ContentForm.controls['nameTH'].enable();
          this.ContentForm.controls['description'].enable();
          this.ContentForm.controls['provinceCode'].enable();
          this.ContentForm.controls['districtCode'].enable();
          this.ContentForm.controls['subdistrictCode'].enable();
          this.ContentForm.controls['isActive'].enable();
          this.ContentForm.controls['departmentTypeCode'].enable();
        }
      }).catch((error) => {
          initialState.status = 'error';
          initialState.title = error.error.error.message;
          initialState.description = error.error.error.description;
          const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
          bsModalRefObj.content.action.subscribe(result => {
            if (result.status) {
              this.modalRef.hide();
            }
          });
      });
    } else {
      this.modalRef.hide();
    }
  }

  ContentSave() {
    if (this.authenticationToken != null) {
      const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
      const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;

      if (this.ContentForm.valid) {
        const contentParams = this.ContentForm.value;
        const authorization = 'Bearer ' + this.authenticationToken;
        let endpoint = null;
        let newEndpoint = null;

        if (this.actionForm === 'add') {
          endpoint = Department.Name.Create;
          newEndpoint = endpoint.url;
        } else if (this.actionForm === 'edit') {
          endpoint = Department.Name.Update;
          newEndpoint = endpoint.url;
        }

        this.Api.callWithOutScope(newEndpoint, endpoint.method, contentParams,  'Authorization', authorization).then((response) => {
          const res = response;
          if (res.code === 1) {
            initialState.status = 'success';
            initialState.title = res.message;
            initialState.description = res.description;
            const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
            bsModalRefObj.content.action.subscribe(result => {
              if (result.status) {
                this.ContentReset();
                this.action.emit({ status: true, process: true});
              }
            });
          } else {
            initialState.status = 'error';
            initialState.title = res.message;
            initialState.description = res.description;
            const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
            bsModalRefObj.content.action.subscribe(result => {
              if (result.status) {
                this.ContentReset();
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
                this.ContentReset();
              }
            });
        });

      } else {
        initialState.status = 'error';
        initialState.title = 'ข้อความจากระบบ';
        initialState.description = 'กรุณากรอกข้อมูลรายชื่อหน่วยงานให้ครบ';
        const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
        bsModalRefObj.content.action.subscribe(result => {
          if (result.status) {
            this.ContentReset();
          }
        });
      }
    } else {
      this.modalRef.hide();
    }
  }

  ContentViewToEdit() {
    this.actionForm = 'edit';
    this.ContentSelect(this.dataObj, false);
  }

  ContentReset() {
    switch (this.actionForm) {
      case 'add':
        this.ContentForm.reset();
        this.ContentForm.controls['isActive'].setValue(this.defaultIsActive);
        break;
      case 'edit':
        this.ContentSelect(this.dataObj, false);
        break;
      case 'view':
        this.ContentSelect(this.dataObj, true);
        break;
      default:
        this.titleModal = 'จัดการข้อมูลรายชื่อหน่วยงาน';
    }
  }

  LookupDepartmentType(departmentTypeCode: any = '') {
    this.lookupDepartmentTypeCode = [];
    if (this.authenticationToken != null) {
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Department.Type.Inquiry.ByList.ListActive;
      this.Api.callWithOutScope(endpoint.url, endpoint.method, {},  'Authorization', authorization).then((response) => {
        if (response != null) {
          response.forEach(element => {
            this.lookupDepartmentTypeCode.push({ value: element.code, label: element.nameTH });
          });

          if (departmentTypeCode !== '') {
            this.ContentForm.controls['departmentTypeCode'].setValue(departmentTypeCode);
            this.getDepartmentType(departmentTypeCode);
          }
        } else {
          this.lookupDepartmentTypeCode = [];
        }
      }).catch((error) => {
        this.lookupDepartmentTypeCode = [];
      });
    } else {
      this.lookupDepartmentTypeCode = [];
    }
  }

  LookupProvince(provinceCode: any = '') {
    this.lookupProvinceCode = [];
    if (this.authenticationToken != null) {
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Utility.Province.Inquiry.ByList.ListActive;
      this.Api.callWithOutScope(endpoint.url, endpoint.method, {},  'Authorization', authorization).then((response) => {
        if (response != null) {
          response.forEach(element => {
            this.lookupProvinceCode.push({ value: element.code, label: element.nameTH });
          });

          if (provinceCode !== '') {
            this.ContentForm.controls['provinceCode'].setValue(provinceCode);
          }
        } else {
          this.lookupProvinceCode = [];
        }
      }).catch((error) => {
        this.lookupProvinceCode = [];
      });
    } else {
      this.lookupProvinceCode = [];
    }
  }

  LookupDistrict(provinceCode: any, districtCode: any = '') {
    this.lookupDistrictCode = [];
    if (this.authenticationToken != null) {
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Utility.District.Inquiry.ByList.Filter.Province.ListActive;
      const newEndpoint = endpoint.url.replace('{province_id}', provinceCode);
      this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((response) => {
        if (response != null) {
          response.forEach(element => {
            this.lookupDistrictCode.push({ value: element.code, label: element.nameTH });
          });

          if (districtCode !== '') {
            this.ContentForm.controls['districtCode'].setValue(districtCode);
          }
        } else {
          this.lookupDistrictCode = [];
        }
      }).catch((error) => {
        this.lookupDistrictCode = [];
      });
    } else {
      this.lookupDistrictCode = [];
    }
  }

  LookupSubDistrict(districtCode: any, subdistrictCode: any = '') {
    this.lookupSubDistrictCode = [];
    if (this.authenticationToken != null) {
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Utility.SubDistrict.Inquiry.ByList.Filter.District.ListActive;
      const newEndpoint = endpoint.url.replace('{district_id}', districtCode);
      this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((response) => {
        if (response != null) {
          this.subDistrictList = response;
          response.forEach(element => {
            this.lookupSubDistrictCode.push({ value: element.code, label: element.nameTH });
          });

          if (subdistrictCode !== '') {
            this.ContentForm.controls['subdistrictCode'].setValue(subdistrictCode);
          }
        } else {
          this.lookupSubDistrictCode = [];
        }
      }).catch((error) => {
        this.lookupSubDistrictCode = [];
      });
    } else {
      this.lookupSubDistrictCode = [];
    }
  }

  getDepartmentType(value: any) {
    if (this.authenticationToken != null) {
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = Department.Type.Inquiry.ById;
      const newEndpoint = endpoint.url.replace('{content_id}', value);

      this.Api.callWithOutScope(newEndpoint, endpoint.method, {},  'Authorization', authorization).then((response) => {
        const res = response;
        if (res.isProvince) {
          this.ContentForm.controls['provinceCode'].setValidators([Validators.required]);
        } else {
          this.ContentForm.controls['provinceCode'].clearValidators();
        }

        if (res.isDistrict) {
          this.ContentForm.controls['districtCode'].setValidators([Validators.required]);

          if (this.PageLoadData != null && this.PageLoadData.province != null) {
            this.LookupDistrict(this.PageLoadData.province.code);
          }
        } else {
          this.ContentForm.controls['districtCode'].clearValidators();
        }

        if (res.isSubdistrict) {
          this.ContentForm.controls['subdistrictCode'].setValidators([Validators.required]);

          if (this.PageLoadData != null && this.PageLoadData.district != null) {
            this.LookupSubDistrict(this.PageLoadData.district.code);
          }
        } else {
          this.ContentForm.controls['subdistrictCode'].clearValidators();
        }

        this.ContentForm.controls['provinceCode'].updateValueAndValidity();
        this.ContentForm.controls['districtCode'].updateValueAndValidity();
        this.ContentForm.controls['subdistrictCode'].updateValueAndValidity();

        this.departmentTypeObj = res;
      }).catch((error) => {
        this.departmentTypeObj = null;
      });
    } else {
      this.departmentTypeObj = null;
    }
  }

  departmentTypeCodeChange(event: any) {
    this.getDepartmentType(event.value);
  }

  provinceCodeChange(event) {
    this.LookupDistrict(event.value);
    this.LookupSubDistrict(0);
  }

  districtCodeChange(event) {
    this.LookupSubDistrict(event.value);
  }

  subDistrictCodeChange(event) {

  }
}
