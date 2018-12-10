import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import * as moment from 'moment';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/primeng';

import { AnimalInfomationComponent } from './../../../animal-information/animal.information.component';

import { ConfigService } from './../../../../core/config.service';

@Component({
  selector: 'app-clinic-pet-register',
  templateUrl: './clinic.pet.register.component.html',
  styleUrls: ['./clinic.pet.register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClinicPetRegisterComponent implements OnInit {
  PetInfoForm: FormGroup;

  modalAIFnRef: BsModalRef;
  dateTimeFormat: string;
  dateNow: string = moment().format('DD/MM/YYYY');
  lacaleTH: any;

  loading: Boolean;
  totalRecords: number;

  pageInfo: any;

  constructor(
    private router: Router,
    private ModalService: BsModalService,
    private themeConfig: ConfigService
  ) { }

  ngOnInit() {
    /****** dataTable ******/
    this.totalRecords = 0;
    this.loading = true;
    this.pageInfo = {
      role: 'pet'
    };

    this.setupFormGroup();
    this.setupCalendar();
  }

  setupFormGroup() {

    this.PetInfoForm = new FormGroup({
      isAddress: new FormControl(false, Validators.required),
      addressNo: new FormControl('', Validators.required),
      moo: new FormControl(''),
      soi: new FormControl(''),
      street: new FormControl(''),
      province: new FormControl('', Validators.required),
      district: new FormControl('', Validators.required),
      subDistrict: new FormControl('', Validators.required),
      zipcode: new FormControl('', Validators.required),
      shelterCategory: new FormControl('', Validators.required),
      shelterStyle: new FormControl('', Validators.required),
    });
}

  setupCalendar() {
    this.dateTimeFormat = this.themeConfig.defaultSettings.dateTimeFormat;
    this.lacaleTH = this.themeConfig.defaultSettings.lacaleTH;
  }

  breadcrumbLink (link: string) {
    this.router.navigate([link]);
  }

  LoadContentLazy(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
  DuplicateAddress(event: any) {
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
