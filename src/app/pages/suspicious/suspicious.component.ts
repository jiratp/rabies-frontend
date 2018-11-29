import { Component, OnInit, Output, Input, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/primeng';
import { SelectItem } from 'primeng/api';

import { ConfigService } from './../../core/config.service';

import { AnimalSuspiciousComponent } from './animal-suspicious-information/animal.suspicious.component';


@Component({
  selector: 'app-suspicious',
  templateUrl: './suspicious.component.html',
  styleUrls: ['./suspicious.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SuspiciousComponent implements OnInit {

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
    this.tab = 'suspicious-list';
    /****** dataTable ******/
    this.totalRecords = 0;
    this.loading = true;
  }

  ManageAnimalSuspicious() {
    const initialState = { actionForm: 'add'};
    const dialogFormSetting = this.themeConfig.defaultSettings.dialogFormSetting;
    dialogFormSetting.class = dialogFormSetting.class + ' custom-width';
    this.modalASnRef = this.ModalService.show(
      AnimalSuspiciousComponent,
      Object.assign({}, dialogFormSetting, { initialState })
    );
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
