import { Component, OnInit, Output, Input, EventEmitter, ViewEncapsulation } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LazyLoadEvent } from 'primeng/primeng';
import { SelectItem } from 'primeng/api';


import { ConfigService } from './../../../core/config.service';

@Component({
  selector: 'app-survey-animal-information.',
  templateUrl: './survey.animal.information.component.html',
  styleUrls: ['./survey.animal.information.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SurveyAnimalInformationComponent implements OnInit {
    @Input() actionForm: string;
    @Output() action = new EventEmitter();

    dateTimeFormat: string;
    lacaleTH: any;

    SAIForm: FormGroup;
    titleModal: string;


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
      this.SAIForm = new FormGroup({});
    }

    setupModalHeader() {
      switch (this.actionForm) {
        case 'add':
          this.titleModal = 'เพิ่มข้อมูลการสำรวจ';
          break;
        default:
          this.titleModal = 'จัดการข้อมูลสัตว์';
      }
    }
    modalClose() {
      this.modalRef.hide();
    }
}
