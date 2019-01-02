import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DialogAlertComponent } from './../../components/dialog-alert/dialog.alert.component';
import { ConfigService } from '../../core/config.service';

import { CallApiService } from './../../providers/request.providers';
import { Utility } from './../../api/utility';
import { User } from './../../api/user';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget.password.component.html',
  styleUrls: ['./forget.password.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CallApiService]
})
export class ForgetPasswordComponent implements OnInit {
  modalRef: BsModalRef;
  forgetPasswordForm: FormGroup;
  constructor(
    private router: Router,
    private Api: CallApiService,
    private ModalService: BsModalService,
    private themeConfig: ConfigService,
  ) { }

  ngOnInit() {
    this.forgetPasswordForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mobileNumber: new FormControl('', Validators.required),
    });
  }

  RenewPassword() {
    const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
    const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
    if (this.forgetPasswordForm.valid) {
        const contentParams = this.forgetPasswordForm.value;

        const endpoint = User.Access.ForgetPassword;
        this.Api.callWithOutScope(endpoint.url, endpoint.method, contentParams, '', '').then((response) => {
            const res = response;
            if (res.code === 1) {
              this.router.navigate(['renew-password'], {queryParams: {'token': res.authenticationToken}});
            } else {
              initialState.status = 'error';
              initialState.title = res.message;
              initialState.description = res.description;
              this.forgetPasswordForm.reset();
              this.modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
            }
        }).catch((error) => {
            initialState.status = 'error';
            initialState.title = error.error.error.message;
            initialState.description = error.error.error.description;
            this.modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
        });
    }  else {
        initialState.status = 'error';
        initialState.title = 'ข้อความจากระบบ';
        initialState.description = 'กรุณากรอกข้อมูลการค้นหาบัญชีผู้ใช้ของคุณให้ครบ';
        this.modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
    }
  }
}
