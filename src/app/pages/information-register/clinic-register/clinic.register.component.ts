import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import * as moment from 'moment';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/primeng';

import { ConfigService } from './../../../core/config.service';

@Component({
  selector: 'app-clinic-register',
  templateUrl: './clinic.register.component.html',
  styleUrls: ['./clinic.register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClinicRegisterComponent implements OnInit {
  searchForm: FormGroup;
  CLINICInfoForm: FormGroup;

  tab: string;

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
    this.tab = 'clinic-information';

    /****** dataTable ******/
    this.totalRecords = 0;
    this.loading = true;
    this.pageInfo = {
      role: 'clinic'
    };

    this.setupFormGroup();
    this.setupCalendar();
  }

  setupFormGroup() {

    this.searchForm = new FormGroup({
      fullname: new FormControl(''),
      MobileNumber: new FormControl(''),
      IDCard: new FormControl(''),
      Address: new FormControl(''),
      animalCategory: new FormControl(''),
      provinceNotifier: new FormControl(''),
      districtNotifier: new FormControl(''),
      subDistrictNotifier: new FormControl(''),
    });

    this.CLINICInfoForm = new FormGroup({
      fullname: new FormControl('', Validators.required),
      licenseID: new FormControl('', Validators.required),
      mobileNumber: new FormControl('', Validators.required),
      addressNo: new FormControl('', Validators.required),
      moo: new FormControl(''),
      soi: new FormControl(''),
      street: new FormControl(''),
      province: new FormControl('', Validators.required),
      district: new FormControl('', Validators.required),
      subDistrict: new FormControl('', Validators.required),
      zipcode: new FormControl('', Validators.required),
    });
}

  setupCalendar() {
    this.dateTimeFormat = this.themeConfig.defaultSettings.dateTimeFormat;
    this.lacaleTH = this.themeConfig.defaultSettings.lacaleTH;
  }

  breadcrumbLink (link: string) {
    this.router.navigate([link]);
  }

  tabSelected(tab) {
    this.tab = tab;
  }

  ManageClinicIndividual() {
    this.router.navigate(['/information/clinic/individual']);
  }

  LoadContentLazy(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
