import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from '../../core/config.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DialogAlertComponent } from './../../components/dialog-alert/dialog.alert.component';

import { CallApiService } from './../../providers/request.providers';
import { Utility } from './../../api/utility';
import { User } from './../../api/user';


@Component({
  selector: 'app-renew-password',
  templateUrl: './renew.password.component.html',
  styleUrls: ['./renew.password.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CallApiService]
})
export class RenewPasswordComponent implements OnInit {
  renewPasswordForm: FormGroup;
  authenticationToken: any = null;
  modalRef: BsModalRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private Api: CallApiService,
    private ModalService: BsModalService,
    private themeConfig: ConfigService) {


  }

  ngOnInit() {
    this.LoadParamsFromURL();
    this.LoadSetupForm();
    this.LoadVerifyToken();
  }

  LoadParamsFromURL() {
    const queryParams = this.route.snapshot.queryParams;
    if (queryParams.token !== undefined) {
      this.authenticationToken = queryParams.token;
    }
  }

  LoadSetupForm() {
    this.renewPasswordForm = new FormGroup({
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    });
  }

  LoadVerifyToken() {
    let tokenStatus = true;
    if (this.authenticationToken === null) {
      tokenStatus = false;
    }

    const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
    const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;

    if (!tokenStatus) {
      initialState.status = 'error';
      initialState.title = 'ข้อความจากระบบ';
      initialState.description = 'ไม่มีข้อมูลในระบบ กรุณาทำการค้นหาบัญชีผู้ใช้ของคุณใหม่อีกครั้ง';
      initialState.btnOK.isActive = true;
      const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
      bsModalRefObj.content.action.subscribe(result => {
        if (result.status) {
          this.router.navigate(['/forget-password']);
        }
      });
    }
  }


  RenewPassword() {
    const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
    const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
    if (this.renewPasswordForm.valid) {
      const contentParams = this.renewPasswordForm.value;
      const authorization = 'Bearer ' + this.authenticationToken;
      const endpoint = User.Profile.RenewPassword;
      this.Api.callWithOutScope(endpoint.url, endpoint.method, contentParams, 'Authorization', authorization).then((response) => {
        const res = response;
        if (res.code === 1) {
            initialState.status = 'success';
            initialState.title = res.message;
            initialState.description = res.description;
            const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
            bsModalRefObj.content.action.subscribe(result => {
              if (result.status) {
                this.router.navigate(['/login']);
              }
            });
        } else {
            initialState.status = 'error';
            initialState.title = res.message;
            initialState.description = res.description;
            const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
            bsModalRefObj.content.action.subscribe(result => {
              if (result.status) {
                this.renewPasswordForm.reset();
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
            this.renewPasswordForm.reset();
          }
        });
      });
    } else {
      initialState.status = 'error';
      initialState.title = 'ข้อความจากระบบ';
      initialState.description = 'กรุณากรอกข้อมูลรหัสผ่านใหม่ให้ครบ';
      this.modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
    }
  }
}
