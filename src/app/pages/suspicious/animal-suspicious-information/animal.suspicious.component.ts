import { Component, OnInit, Output, Input, EventEmitter, ViewEncapsulation } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LazyLoadEvent } from 'primeng/primeng';
import { SelectItem } from 'primeng/api';

import * as moment from 'moment';

import { ConfigService } from './../../../core/config.service';


@Component({
  selector: 'app-animal-suspicious',
  templateUrl: './animal.suspicious.component.html',
  styleUrls: ['./animal.suspicious.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AnimalSuspiciousComponent implements OnInit {
    @Input() actionForm: string;
    @Output() action = new EventEmitter();

    dateTimeFormat: string;
    dateNow: string = moment().format('DD/MM/YYYY');
    lacaleTH: any;

    ASForm: FormGroup;
    titleModal: string;

    uploadedFiles: any[] = [];
    fileToUpload: File = null;


    animalRegisterShow: SelectItem[];
    masterProvinceShow: SelectItem[];
    masterDistrictShow: SelectItem[];
    masterSubDistrictShow: SelectItem[];
    masterPlaceIDShow: SelectItem[];
    masterSupportIDShow: SelectItem[];
    masterAnimalRegisterShow: SelectItem[];


    constructor(
      public modalRef: BsModalRef,
      private ModalService: BsModalService,
      private themeConfig: ConfigService,
    ) {}

    ngOnInit() {
      this.setupCalendar();
      this.setupModalHeader();
      this.setupFormGroup();
      this.action.emit(true);
    }

    setupCalendar() {
      this.dateTimeFormat = this.themeConfig.defaultSettings.dateTimeFormat;
      this.lacaleTH = this.themeConfig.defaultSettings.lacaleTH;
    }

    setupFormGroup() {

      this.ASForm = new FormGroup({
        notificationDate: new FormControl({value: this.dateNow, disabled: true}, Validators.required),
        animalCategory: new FormControl('', Validators.required),
        animalSpecies: new FormControl('', Validators.required),
        animalSpeciesOther: new FormControl(''),
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
        isAddressNotifier: new FormControl(false , Validators.required),
        addressNoNotifier: new FormControl(''),
        mooNotifier: new FormControl(''),
        soiNotifier: new FormControl(''),
        streetNotifier: new FormControl(''),
        provinceNotifier: new FormControl(''),
        districtNotifier: new FormControl(''),
        subDistrictNotifier: new FormControl(''),
        zipcodeNotifier: new FormControl(''),
        longitude: new FormControl('', Validators.required),
        latitude: new FormControl('', Validators.required),
        symptomInformation: new FormControl('', Validators.required),
        animalImage: new FormControl([])
      });
    }

    setupModalHeader() {
      switch (this.actionForm) {
        case 'add':
          this.titleModal = 'เพิ่มข้อมูลสัตว์ต้องสงสัย';
          break;
        default:
          this.titleModal = 'จัดการข้อมูลสัตว์';
      }
    }

    handleFileInput(file) {
    }

    clearFileInput() {
    }

    removeFileInput(file) {
    }

    duplicateAddress(event) {
      if (event) {
        // SET FORM VALUE
        this.ASForm.controls['addressNoNotifier'].setValue(this.ASForm.controls['addressNo'].value);
        this.ASForm.controls['mooNotifier'].setValue(this.ASForm.controls['moo'].value);
        this.ASForm.controls['soiNotifier'].setValue(this.ASForm.controls['soi'].value);
        this.ASForm.controls['streetNotifier'].setValue(this.ASForm.controls['street'].value);
        this.ASForm.controls['provinceNotifier'].setValue(this.ASForm.controls['province'].value);
        this.ASForm.controls['districtNotifier'].setValue(this.ASForm.controls['district'].value);
        this.ASForm.controls['subDistrictNotifier'].setValue(this.ASForm.controls['subDistrict'].value);
        this.ASForm.controls['zipcodeNotifier'].setValue(this.ASForm.controls['zipcode'].value);

        // DISABLED FORM
        this.ASForm.controls['addressNoNotifier'].disable();
        this.ASForm.controls['mooNotifier'].disable();
        this.ASForm.controls['soiNotifier'].disable();
        this.ASForm.controls['streetNotifier'].disable();
        this.ASForm.controls['provinceNotifier'].disable();
        this.ASForm.controls['districtNotifier'].disable();
        this.ASForm.controls['subDistrictNotifier'].disable();
        this.ASForm.controls['zipcodeNotifier'].disable();

      } else {
        // SET FORM VALUE
        this.ASForm.controls['addressNoNotifier'].setValue('');
        this.ASForm.controls['mooNotifier'].setValue('');
        this.ASForm.controls['soiNotifier'].setValue('');
        this.ASForm.controls['streetNotifier'].setValue('');
        this.ASForm.controls['provinceNotifier'].setValue('');
        this.ASForm.controls['districtNotifier'].setValue('');
        this.ASForm.controls['subDistrictNotifier'].setValue('');
        this.ASForm.controls['zipcodeNotifier'].setValue('');

        // ENABLED FORM
        this.ASForm.controls['addressNoNotifier'].enable();
        this.ASForm.controls['mooNotifier'].enable();
        this.ASForm.controls['soiNotifier'].enable();
        this.ASForm.controls['streetNotifier'].enable();
        this.ASForm.controls['provinceNotifier'].enable();
        this.ASForm.controls['districtNotifier'].enable();
        this.ASForm.controls['subDistrictNotifier'].enable();
        this.ASForm.controls['zipcodeNotifier'].enable();
      }
    }

    modalClose() {
      this.modalRef.hide();
    }
}
