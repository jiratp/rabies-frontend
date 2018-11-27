import { Component, OnInit, Output, Input, EventEmitter, ViewEncapsulation } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LazyLoadEvent } from 'primeng/primeng';
import { SelectItem } from 'primeng/api';


import { ConfigService } from './../../core/config.service';

@Component({
  selector: 'app-animal-information',
  templateUrl: './animal.information.component.html',
  styleUrls: ['./animal.information.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AnimalInfomationComponent implements OnInit {
    @Input() actionForm: string;
    @Output() action = new EventEmitter();

    dateTimeFormat: string;
    lacaleTH: any;

    animalInformationForm: FormGroup;
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
      this.animalInformationForm = new FormGroup({});
    }

    setupModalHeader() {
      switch (this.actionForm) {
        case 'add':
          this.titleModal = 'เพิ่มข้อมูลสัตว์';
          break;
        default:
          this.titleModal = 'จัดการข้อมูลสัตว์';
      }
    }

    modalClose() {
      this.modalRef.hide();
    }
}
