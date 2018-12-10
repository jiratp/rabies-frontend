import { Component, OnInit, Output, Input, EventEmitter, ViewEncapsulation } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


import { LazyLoadEvent } from 'primeng/primeng';
import * as moment from 'moment';

import { ConfigService } from '../../../core/config.service';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample.form.component.html',
  styleUrls: ['./sample.form.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SampleFormComponent implements OnInit {
    actionForm: string;

    dateTimeFormat: string;
    dateNow: string = moment().format('DD/MM/YYYY');
    lacaleTH: any;

    sampleForm: FormGroup;
    titleModal: string;

    uploadedFiles: any[] = [];
    fileToUpload: File = null;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private themeConfig: ConfigService
    ) { }

    ngOnInit() {
        this.actionForm = this.route.snapshot.queryParams.action;

        /****** dataTable ******/

        this.setupHeader();
        this.setupFormGroup();
        this.setupCalendar();
    }

    setupHeader() {
        switch (this.actionForm) {
            case 'add':
                this.titleModal = 'เพิ่มข้อมูลการส่งตัวอย่าง';
                break;
            default:
                this.titleModal = 'จัดการข้อมูลการส่งตัวอย่าง';
        }
    }

    setupCalendar() {
        this.dateTimeFormat = this.themeConfig.defaultSettings.dateTimeFormat;
        this.lacaleTH = this.themeConfig.defaultSettings.lacaleTH;
    }

    setupFormGroup() {

        this.sampleForm = new FormGroup({
            departmentNameOfSampleSender: new FormControl('', Validators.required),
            departmentPhoneNumberOfSampleSender: new FormControl('', Validators.required),
            titleOfSampleSender: new FormControl('', Validators.required),
            fullnameOfSampleSender: new FormControl('', Validators.required),
            addressNoOfSampleSender: new FormControl('', Validators.required),
            mooOfSampleSender: new FormControl(''),
            soiOfSampleSender: new FormControl(''),
            streetOfSampleSender: new FormControl(''),
            provinceOfSampleSender: new FormControl('', Validators.required),
            districtOfSampleSender: new FormControl('', Validators.required),
            subDistrictOfSampleSender: new FormControl('', Validators.required),
            zipcodeOfSampleSender: new FormControl('', Validators.required),
            mobileNumberOfSampleSender: new FormControl('', Validators.required),

            registrationNo: new FormControl('', Validators.required),
            sampleNo: new FormControl(''),
            sendSampleDate: new FormControl(''),
            receiveSampleDate: new FormControl(''),
            receiverName: new FormControl(''),
            laboratoryName: new FormControl(''),
            sampleObjectives: new FormControl(''),

            isAddressOwnerWithSampleSender: new FormControl('', Validators.required),

            titleOfOwner: new FormControl('', Validators.required),
            fullnameOfOwner: new FormControl('', Validators.required),
            mobileNumberOfOwner: new FormControl('', Validators.required),
            

            shelterTypeOfOwner: new FormControl('', Validators.required),
            addressNoOfOwner: new FormControl('', Validators.required),
            mooOfOwner: new FormControl(''),
            soiOfOwner: new FormControl(''),
            streetOfOwner: new FormControl(''),
            provinceOfOwner: new FormControl('', Validators.required),
            districtOfOwner: new FormControl('', Validators.required),
            subDistrictOfOwner: new FormControl('', Validators.required),
            zipcodeOfOwner: new FormControl('', Validators.required),

            isAddressOwnerOfSuspicious: new FormControl(''),
            shelterTypeOfSuspicious: new FormControl('', Validators.required),
            shelterAmountOfSuspicious: new FormControl(''),
            addressNoOfSuspicious: new FormControl('', Validators.required),
            mooOfSuspicious: new FormControl(''),
            soiOfSuspicious: new FormControl(''),
            streetOfSuspicious: new FormControl(''),
            provinceOfSuspicious: new FormControl('', Validators.required),
            districtOfSuspicious: new FormControl('', Validators.required),
            subDistrictOfSuspicious: new FormControl('', Validators.required),
            zipcodeOfSuspicious: new FormControl('', Validators.required),
            animalCategory: new FormControl('', Validators.required),
            animalIdentity: new FormControl('', Validators.required),
            animalSpecies: new FormControl('', Validators.required),
            animalSpeciesOther: new FormControl(''),
            animalColor: new FormControl('', Validators.required),
            animalColorOther: new FormControl(''),
            animalGender: new FormControl('', Validators.required),

            animalHistory: new FormControl('', Validators.required),
            shelterCategory: new FormControl('', Validators.required),
            animalBehavior: new FormControl('', Validators.required),
            vaccination: new FormControl('', Validators.required),
            sterilization: new FormControl('', Validators.required),
            symptomsStatus: new FormControl('', Validators.required),

            abnormalities: new FormControl(''),

            peopleBite: new FormControl(''),
            peopleAmountBite: new FormControl(''),
            peopleTouching: new FormControl(''),
            peopleAmountTouching: new FormControl(''),
            animalBite: new FormControl(''),
            animalAmountBite: new FormControl(''),
            animalTouching: new FormControl(''),
            animalAmountTouching: new FormControl(''),

            animalReasonDeed: new FormControl(''),
            animalDeedDate: new FormControl(''),
        });
    }

    breadcrumbLink (link: string) {
        this.router.navigate([link]);
    }

    ManageAnimalInformation() {

    }

    DuplicateAddressWithSampleSender (event: any) {

    }

}
