import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/primeng';

import * as moment from 'moment';

import { ConfigService } from './../../../core/config.service';

import { SurveyAnimalInformationComponent } from './../survey-animal-information/survey.animal.information.component';

@Component({
  selector: 'app-noowner-information',
  templateUrl: './noowner.information.component.html',
  styleUrls: ['./noowner.information.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NoOwnerInformationComponent implements OnInit {
  actionForm: string;

  modalSAInRef: BsModalRef;
  modalSASnRef: BsModalRef;

  SVNoOwnerForm: FormGroup;
  titleModal: string;
  dateTimeFormat: string;
  dateNow: string = moment().format('DD/MM/YYYY');
  lacaleTH: any;

  loading: Boolean;
  totalRecords: number;
  uploadedFiles: any[] = [];
  fileToUpload: File = null;

  constructor(
    private ModalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute,
    private themeConfig: ConfigService
  ) { }

  ngOnInit() {
    this.actionForm = this.route.snapshot.queryParams.action;

    /****** dataTable ******/
    this.totalRecords = 0;
    this.loading = true;

    this.setupHeader();
    this.setupFormGroup();
    this.setupCalendar();
  }

  setupHeader() {
    switch (this.actionForm) {
        case 'add':
            this.titleModal = 'เพิ่มข้อมูลสัตว์ไม่มีเจ้าของ';
            break;
        default:
            this.titleModal = 'จัดการข้อมูลสัตว์ไม่มีเจ้าของ';
    }
  }

  setupCalendar() {
    this.dateTimeFormat = this.themeConfig.defaultSettings.dateTimeFormat;
    this.lacaleTH = this.themeConfig.defaultSettings.lacaleTH;
  }

  setupFormGroup() {

      this.SVNoOwnerForm = new FormGroup({
        surveyDate: new FormControl(this.dateNow, Validators.required),
        surveyerName: new FormControl('', Validators.required),
        surveyerIDCard: new FormControl('', Validators.required),
        surveyerPhoneNumber: new FormControl('', Validators.required),
        surveyerDepartmentName: new FormControl(''),
        provinceSurvey: new FormControl('', Validators.required),
        districtSurvey: new FormControl('', Validators.required),
        subDistrictSurvey: new FormControl('', Validators.required),
        areaLocation: new FormControl('', Validators.required),
        moo: new FormControl(''),
        soi: new FormControl(''),
        street: new FormControl(''),
        province: new FormControl('', Validators.required),
        district: new FormControl('', Validators.required),
        subDistrict: new FormControl('', Validators.required),
        title: new FormControl('', Validators.required),
        fullname: new FormControl('', Validators.required),
        mobileNumber: new FormControl('', Validators.required),
      });
  }

  LoadContentLazy(event: LazyLoadEvent) {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
      }, 1000);
  }

  ManageSurveyAnimalInformation() {
    const initialState = { actionForm: 'add'};
    const dialogFormSetting = this.themeConfig.defaultSettings.dialogFormSetting;
    this.modalSAInRef = this.ModalService.show(
      SurveyAnimalInformationComponent,
      Object.assign({}, dialogFormSetting, { initialState })
    );
  }

  breadcrumbLink (link: string) {
    this.router.navigate([link]);
  }
}
