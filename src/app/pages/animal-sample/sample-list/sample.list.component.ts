import { Component, OnInit, Output, Input, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/primeng';
import { SelectItem } from 'primeng/api';
import * as moment from 'moment';

import { ConfigService } from './../../../core/config.service';

@Component({
  selector: 'app-sample-list',
  templateUrl: './sample.list.component.html',
  styleUrls: ['./sample.list.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SampleListComponent implements OnInit {
  searchForm: FormGroup;

  dateTimeFormat: string;
  dateNow: string = moment().format('DD/MM/YYYY');
  lacaleTH: any;

  tab: string;
  loading: Boolean;
  totalRecords: number;

  constructor(
    private router: Router,
    private ModalService: BsModalService,
    private themeConfig: ConfigService
  ) { }

  ngOnInit() {
    this.tab = 'search-group';
    /****** dataTable ******/
    this.totalRecords = 0;
    this.loading = true;

    this.setupFormGroup();
    this.setupCalendar();
  }

  setupFormGroup() {
    this.searchForm = new FormGroup({
      sampleNo: new FormControl(''),
      ownerName: new FormControl(''),
      animalCategory: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      provinceOfSampleSender: new FormControl(''),
      districtOfSampleSender: new FormControl(''),
      subDistrictOfSampleSender: new FormControl(''),
      laboratoryResult: new FormControl(''),
      diagnosisResult: new FormControl(''),
      sampleObjectives: new FormControl(''),
    });
  }


  setupCalendar() {
    this.dateTimeFormat = this.themeConfig.defaultSettings.dateTimeFormat;
    this.lacaleTH = this.themeConfig.defaultSettings.lacaleTH;
  }

  tabSelected(tab) {
    this.tab = tab;
  }

  ManageAnimalSample() {
    this.router.navigate(['sample/animal-sample-form'], {queryParams: {action: 'add'}});
  }

  LoadContentLazy(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

}
