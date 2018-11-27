import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../../core/config.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


import { LazyLoadEvent } from 'primeng/primeng';
import { SelectItem } from 'primeng/api';

import { AnimalInfomationComponent } from './../../animal-information/animal.information.component';

import { AnimalOwnerProfile, AnimalInformation } from './../../../model/animal.information.model';
import { MasterDropdownStatic } from './../../../model/master.dropdown.model';


@Component({
  selector: 'app-owner-information',
  templateUrl: './owner.information.component.html',
  styleUrls: ['./owner.information.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OwnerInformationComponent implements OnInit {
  modalRef: BsModalRef;

  informationForm: FormGroup;
  surveyerForm: FormGroup;
  tab: string;
  animalInformations: AnimalInformation[];
  loading: Boolean;
  totalRecords: number;

  animalRegisterShow: SelectItem[];
  masterProvinceShow: SelectItem[];
  masterDistrictShow: SelectItem[];
  masterSubDistrictShow: SelectItem[];
  masterPlaceIDShow: SelectItem[];
  masterSupportIDShow: SelectItem[];
  masterAnimalRegisterShow: SelectItem[];

  constructor(
    private router: Router,
    private ModalService: BsModalService,
    private themeConfig: ConfigService
  ) { }

  ngOnInit() {
    this.informationForm = new FormGroup({
        customerType: new FormControl('corporation-customer'),
    });

    this.surveyerForm = new FormGroup({
      customerType: new FormControl('corporation-customer'),
    });

    this.configMasterData();

    /****** Layout ******/
    this.tab = 'surveyer-info';
    /****** dataTable ******/
    this.totalRecords = 0;
    this.loading = true;
  }

  configMasterData() {
    this.animalRegisterShow = [
        {label: 'Select City', value: null},
        {label: 'New York', value: {id: 1, name: 'New York', code: 'NY'}},
        {label: 'Rome', value: {id: 2, name: 'Rome', code: 'RM'}},
        {label: 'London', value: {id: 3, name: 'London', code: 'LDN'}},
        {label: 'Istanbul', value: {id: 4, name: 'Istanbul', code: 'IST'}},
        {label: 'Paris', value: {id: 5, name: 'Paris', code: 'PRS'}}
    ];

    this.masterAnimalRegisterShow = this.animalRegisterShow;
    this.masterProvinceShow = this.animalRegisterShow;
    this.masterDistrictShow = this.animalRegisterShow;
    this.masterSubDistrictShow = this.animalRegisterShow;
    this.masterPlaceIDShow = this.animalRegisterShow;
    this.masterSupportIDShow = this.animalRegisterShow;

  }

  LoadContentLazy(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  tabSelected(tab) {
    this.tab = tab;
  }

  formAnimalInformation(actionForm: string) {
    const initialState = { actionForm: 'add'};
    const dialogFormSetting = this.themeConfig.defaultSettings.dialogFormSetting;
    this.modalRef = this.ModalService.show(
      AnimalInfomationComponent,
      Object.assign({}, dialogFormSetting, { initialState })
    );
  }
}
