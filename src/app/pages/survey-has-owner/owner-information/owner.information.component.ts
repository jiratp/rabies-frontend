import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from '@angular/router';

import { LazyLoadEvent } from 'primeng/primeng';

import * as moment from 'moment';

import { AnimalInfomationComponent } from './../../animal-information/animal.information.component';

import { ConfigService } from '../../../core/config.service';

@Component({
  selector: 'app-owner-information',
  templateUrl: './owner.information.component.html',
  styleUrls: ['./owner.information.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class OwnerInformationComponent implements OnInit {
    actionForm: string;

    modalAIFnRef: BsModalRef;

    dateTimeFormat: string;
    dateNow: string = moment().format('DD/MM/YYYY');
    lacaleTH: any;

    SVOwnerForm: FormGroup;
    titleModal: string;

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
                this.titleModal = 'เพิ่มข้อมูลเจ้าของสัตว์';
                break;
            default:
                this.titleModal = 'จัดการข้อมูลเจ้าของสัตว์';
        }
    }

    setupCalendar() {
        this.dateTimeFormat = this.themeConfig.defaultSettings.dateTimeFormat;
        this.lacaleTH = this.themeConfig.defaultSettings.lacaleTH;
    }

    setupFormGroup() {

        this.SVOwnerForm = new FormGroup({
            surveyDate: new FormControl(this.dateNow, Validators.required),
            surveyerName: new FormControl('', Validators.required),
            surveyerIDCard: new FormControl('', Validators.required),
            surveyerPhoneNumber: new FormControl('', Validators.required),
            surveyerDepartmentName: new FormControl(''),
            provinceSurvey: new FormControl('', Validators.required),
            districtSurvey: new FormControl('', Validators.required),
            subDistrictSurvey: new FormControl('', Validators.required),
            title: new FormControl('', Validators.required),
            fullname: new FormControl('', Validators.required),
            addressNo: new FormControl('', Validators.required),
            moo: new FormControl(''),
            soi: new FormControl(''),
            street: new FormControl(''),
            province: new FormControl('', Validators.required),
            district: new FormControl('', Validators.required),
            subDistrict: new FormControl('', Validators.required),
            zipcode: new FormControl('', Validators.required),
            mobileNumber: new FormControl('', Validators.required),
            isAddressAnimal: new FormControl(false , Validators.required),
            addressNoAnimal: new FormControl(''),
            mooAnimal: new FormControl(''),
            soiAnimal: new FormControl(''),
            streetAnimal: new FormControl(''),
            provinceAnimal: new FormControl(''),
            districtAnimal: new FormControl(''),
            subDistrictAnimal: new FormControl(''),
            zipcodeAnimal: new FormControl(''),
        });
      }

    LoadContentLazy(event: LazyLoadEvent) {
        this.loading = true;

        setTimeout(() => {
          this.loading = false;
        }, 1000);
    }

    duplicateAddress(event) {
        if (event) {
          // SET FORM VALUE
          this.SVOwnerForm.controls['addressNoAnimal'].setValue(this.SVOwnerForm.controls['addressNo'].value);
          this.SVOwnerForm.controls['mooAnimal'].setValue(this.SVOwnerForm.controls['moo'].value);
          this.SVOwnerForm.controls['soiAnimal'].setValue(this.SVOwnerForm.controls['soi'].value);
          this.SVOwnerForm.controls['streetAnimal'].setValue(this.SVOwnerForm.controls['street'].value);
          this.SVOwnerForm.controls['provinceAnimal'].setValue(this.SVOwnerForm.controls['province'].value);
          this.SVOwnerForm.controls['districtAnimal'].setValue(this.SVOwnerForm.controls['district'].value);
          this.SVOwnerForm.controls['subDistrictAnimal'].setValue(this.SVOwnerForm.controls['subDistrict'].value);
          this.SVOwnerForm.controls['zipcodeAnimal'].setValue(this.SVOwnerForm.controls['zipcode'].value);
  
          // DISABLED FORM
          this.SVOwnerForm.controls['addressNoAnimal'].disable();
          this.SVOwnerForm.controls['mooAnimal'].disable();
          this.SVOwnerForm.controls['soiAnimal'].disable();
          this.SVOwnerForm.controls['streetAnimal'].disable();
          this.SVOwnerForm.controls['provinceAnimal'].disable();
          this.SVOwnerForm.controls['districtAnimal'].disable();
          this.SVOwnerForm.controls['subDistrictAnimal'].disable();
          this.SVOwnerForm.controls['zipcodeAnimal'].disable();
  
        } else {
          // SET FORM VALUE
          this.SVOwnerForm.controls['addressNoAnimal'].setValue('');
          this.SVOwnerForm.controls['mooAnimal'].setValue('');
          this.SVOwnerForm.controls['soiAnimal'].setValue('');
          this.SVOwnerForm.controls['streetAnimal'].setValue('');
          this.SVOwnerForm.controls['provinceAnimal'].setValue('');
          this.SVOwnerForm.controls['districtAnimal'].setValue('');
          this.SVOwnerForm.controls['subDistrictAnimal'].setValue('');
          this.SVOwnerForm.controls['zipcodeAnimal'].setValue('');
  
          // ENABLED FORM
          this.SVOwnerForm.controls['addressNoAnimal'].enable();
          this.SVOwnerForm.controls['mooAnimal'].enable();
          this.SVOwnerForm.controls['soiAnimal'].enable();
          this.SVOwnerForm.controls['streetAnimal'].enable();
          this.SVOwnerForm.controls['provinceAnimal'].enable();
          this.SVOwnerForm.controls['districtAnimal'].enable();
          this.SVOwnerForm.controls['subDistrictAnimal'].enable();
          this.SVOwnerForm.controls['zipcodeAnimal'].enable();
        }
    }

    breadcrumbLink (link: string) {
        this.router.navigate([link]);
    }

    ManageAnimalInformation() {
        const initialState = { actionForm: 'add'};
        const dialogFormSetting = this.themeConfig.defaultSettings.dialogFormSetting;
        dialogFormSetting.class = dialogFormSetting.class + ' custom-width';
        this.modalAIFnRef = this.ModalService.show(
            AnimalInfomationComponent,
            Object.assign({}, dialogFormSetting, { initialState })
        );
    }

}
