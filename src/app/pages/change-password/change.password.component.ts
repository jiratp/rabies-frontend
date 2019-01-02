import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { CookieService } from 'ngx-cookie-service';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DialogAlertComponent } from './../../components/dialog-alert/dialog.alert.component';
import { ConfigService } from '../../core/config.service';

import { CallApiService } from './../../providers/request.providers';
import { Utility } from './../../api/utility';
import { User } from './../../api/user';

@Component({
  selector: 'app-change-password',
  templateUrl: './change.password.component.html',
  styleUrls: ['./change.password.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CallApiService]
})

export class ChangePasswordComponent implements OnInit {
  modalRef: BsModalRef;
  changePasswordForm: FormGroup;
  authenticationToken: any;

  constructor(
    private Api: CallApiService,
    private ModalService: BsModalService,
    private themeConfig: ConfigService,
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private cookieService: CookieService
  ) { }


  ngOnInit() {
    this.LoadSessionPage();
    this.LoadConfigForm();
  }

  LoadConfigForm() {
    this.changePasswordForm = new FormGroup({
      oldPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
      confirmNewPassword: new FormControl('', Validators.required),
    });
  }

  LoadSessionPage() {
    const cookieExists: boolean = this.cookieService.check('AuthenticationToken');
    if (cookieExists) {
        const AuthToken = this.cookieService.get('AuthenticationToken');
        this.storage.set('AuthenticationToken', AuthToken);
    }
    this.authenticationToken = this.storage.get('AuthenticationToken');
    if (this.authenticationToken === undefined) {
      this.authenticationToken = null;
    }
  }

  changePassword() {
    if (this.authenticationToken != null) {
      const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
      const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
      if (this.changePasswordForm.valid) {
          const contentParams = this.changePasswordForm.value;
          const authorization = 'Bearer ' + this.authenticationToken;
          const endpoint = User.Profile.ChangePassword;
          this.Api.callWithOutScope(endpoint.url, endpoint.method, contentParams,  'Authorization', authorization).then((response) => {
              const res = response;
              if (res.code === 1) {
                initialState.status = 'success';
                initialState.title = res.message;
                initialState.description = res.description;
                const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
                bsModalRefObj.content.action.subscribe(result => {
                  if (result.status) {
                    this.changePasswordForm.reset();
                  }
                });
              } else {
                initialState.status = 'error';
                initialState.title = res.message;
                initialState.description = res.description;
                const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
                bsModalRefObj.content.action.subscribe(result => {
                  if (result.status) {
                    this.changePasswordForm.reset();
                  }
                });
              }
          }).catch((error) => {
              initialState.status = 'error';
              initialState.title = error.error.error.message;
              initialState.description = error.error.error.description;
              const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
              bsModalRefObj.content.action.subscribe(result => {
                if (result.status) {
                  this.changePasswordForm.reset();
                }
              });
          });
      }  else {
          initialState.status = 'error';
          initialState.title = 'ข้อความจากระบบ';
          initialState.description = 'กรุณากรอกข้อมูลการค้นหาบัญชีผู้ใช้ของคุณให้ครบ';
          const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
          bsModalRefObj.content.action.subscribe(result => {
            if (result.status) {
              this.changePasswordForm.reset();
            }
          });
      }
    }
  }

  ResetForm() {
    this.changePasswordForm.reset();
  }
}
