import { Component, OnInit, Output, Input, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/primeng';
import { SelectItem } from 'primeng/api';
import * as moment from 'moment';

import { ConfigService } from './../../../core/config.service';

@Component({
  selector: 'app-subdistrict-management',
  templateUrl: './subdistrict.management.component.html',
  styleUrls: ['./subdistrict.management.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SubdistrictManagementComponent implements OnInit {
  searchForm: FormGroup;

  dateTimeFormat: string;
  dateNow: string = moment().format('DD/MM/YYYY');
  lacaleTH: any;

  modalASnRef: BsModalRef;

  tab: string;
  loading: Boolean;
  totalRecords: number;

  constructor(
    private router: Router,
    private ModalService: BsModalService,
    private themeConfig: ConfigService
  ) { }


  ngOnInit() {
    this.tab = 'subdistrict-management-list';
    /****** dataTable ******/
    this.totalRecords = 0;
    this.loading = true;

    this.setupFormGroup();
    this.setupCalendar();
  }

  setupFormGroup() {
    this.searchForm = new FormGroup({
    });
  }

  setupCalendar() {
    this.dateTimeFormat = this.themeConfig.defaultSettings.dateTimeFormat;
    this.lacaleTH = this.themeConfig.defaultSettings.lacaleTH;
  }

  ManageAnimalSuspicious() {

  }


  tabSelected(tab) {
    this.tab = tab;
  }

  LoadContentLazy(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
