import { Component, OnInit, Output, Input, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/primeng';
import { SelectItem } from 'primeng/api';

import { MasterDropdownStatic } from './../../../model/master.dropdown.model';

import { ConfigService } from './../../../core/config.service';

import { SurveyAnimalInformationComponent } from './../survey-animal-information/survey.animal.information.component';
import { SurveyAnimalSuspiciousComponent } from './../survey-animal-suspicious/survey.animal.suspicious.component';



@Component({
  selector: 'app-noowner-information',
  templateUrl: './noowner.information.component.html',
  styleUrls: ['./noowner.information.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NoOwnerInformationComponent implements OnInit {
  modalSAInRef: BsModalRef;
  modalSASnRef: BsModalRef;

  informationForm: FormGroup;
  tab: string;
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

  ManageSurveyAnimalSuspicious() {
    const initialState = { actionForm: 'add'};
    const dialogFormSetting = this.themeConfig.defaultSettings.dialogFormSetting;
    // dialogFormSetting.class = dialogFormSetting.class + ' custom-width';
    this.modalSASnRef = this.ModalService.show(
      SurveyAnimalSuspiciousComponent,
      Object.assign({}, dialogFormSetting, { initialState })
    );
  }

  ManageSurveyAnimalInformation() {
    const initialState = { actionForm: 'add'};
    const dialogFormSetting = this.themeConfig.defaultSettings.dialogFormSetting;
    // dialogFormSetting.class = 'modal-lg modal-dialog-centered custom-width';
    this.modalSAInRef = this.ModalService.show(
      SurveyAnimalInformationComponent,
      Object.assign({}, dialogFormSetting, { initialState })
    );
  }

  formAnimalInformation(actionForm: string) {

  }
}
