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
  dateTimeFormat: string;
  lacaleTH: any;

  titleModal: string;
  AIForm: FormGroup;

  uploadedFiles: any[] = [];
  fileToUpload: File = null;
  constructor(
    public modalRef: BsModalRef,
    private ModalService: BsModalService,
    private themeConfig: ConfigService,
  ) {}

  ngOnInit() {
    this.setupCalendar();
    this.setupModalHeader();
    this.setupFormGroup();
  }

  setupCalendar() {
    this.dateTimeFormat = this.themeConfig.defaultSettings.dateTimeFormat;
    this.lacaleTH = this.themeConfig.defaultSettings.lacaleTH;
  }

  setupFormGroup() {
    this.AIForm = new FormGroup({
      animalCategory: new FormControl('', Validators.required),
      animalIdentity: new FormControl('', Validators.required),
      animalSpecies: new FormControl('', Validators.required),
      animalSpeciesOther: new FormControl(''),
      animalColor: new FormControl('', Validators.required),
      animalColorOther: new FormControl(''),
      animalGender: new FormControl('', Validators.required),
      shelterCategory: new FormControl('', Validators.required),
      shelterCategoryOther: new FormControl(''),
      animalBehavior: new FormControl('', Validators.required),
      animalBehaviorOther: new FormControl(''),
      vaccination: new FormControl('', Validators.required),
      vaccinationDate: new FormControl(''),
      sterilization: new FormControl('', Validators.required),
      sterilizationDate: new FormControl(''),
      animalBirthday: new FormControl(''),
      animalAgeYear: new FormControl(''),
      animalAgeMonth: new FormControl(''),
    });
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

  handleFileInput(file) {
  }

  clearFileInput() {
  }

  removeFileInput(file) {
  }

  modalClose() {
    this.modalRef.hide();
  }
}
