import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import * as moment from 'moment';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/primeng';

import { ConfigService } from './../../../core/config.service';

@Component({
  selector: 'app-individual-register',
  templateUrl: './individual.register.component.html',
  styleUrls: ['./individual.register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IndividualRegisterComponent implements OnInit {
  IDVInfoForm: FormGroup;

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
      role: 'individual'
    };

    this.setupFormGroup();
    this.setupCalendar();
  }

  setupFormGroup() {

    this.IDVInfoForm = new FormGroup({
      title: new FormControl('', Validators.required),
      fullname: new FormControl('', Validators.required),
      IDCard: new FormControl('', Validators.required),
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

  ManagePetRegister() {
    this.router.navigate(['/information/individual/register']);
  }

  LoadContentLazy(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
