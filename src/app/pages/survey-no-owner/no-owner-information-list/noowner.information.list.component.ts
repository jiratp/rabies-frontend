import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import * as moment from 'moment';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OwnerInfomationGroup } from './../../../model/round.group.model';
import { LazyLoadEvent } from 'primeng/primeng';

import { ConfigService } from './../../../core/config.service';

@Component({
  selector: 'app-noowner-information-list',
  templateUrl: './noowner.information.list.component.html',
  styleUrls: ['./noowner.information.list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NoOwnerInformationListComponent implements OnInit {
  searchForm: FormGroup;

  dateTimeFormat: string;
  dateNow: string = moment().format('DD/MM/YYYY');
  lacaleTH: any;

  tab: string;
  loading: Boolean;
  totalRecords: number;
  noOwnerInfomationGroup: OwnerInfomationGroup[];

  constructor(
    private router: Router,
    private ModalService: BsModalService,
    private themeConfig: ConfigService
  ) { }

  ngOnInit() {
    this.tab = 'noowner-information-group';
    /****** dataTable ******/
    this.totalRecords = 0;
    this.loading = true;

    this.setupFormGroup();
    this.setupCalendar();
  }

  setupFormGroup() {
    this.searchForm = new FormGroup({
      shelterCategory: new FormControl(''),
      shelterName: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      animalCategory: new FormControl(''),
      provinceNotifier: new FormControl(''),
      districtNotifier: new FormControl(''),
      subDistrictNotifier: new FormControl(''),
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

  ManageNoOwnerInformation() {
    this.router.navigate(['survey/animal-no-owner/noowner-information'], {queryParams: {action: 'add'}});
  }

  LoadContentLazy(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
