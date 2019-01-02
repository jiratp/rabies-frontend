import { Component, OnInit, ChangeDetectorRef, Inject, ViewEncapsulation } from '@angular/core';
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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CallApiService]
})

export class LoginComponent implements OnInit {
    modalRef: BsModalRef;
    signinForm: FormGroup;
    constructor(
        private router: Router,
        private Api: CallApiService,
        private ModalService: BsModalService,
        private themeConfig: ConfigService,
        @Inject(SESSION_STORAGE) private storage: StorageService,
        private cookieService: CookieService
    ) {

        this.themeConfig.setSettings({
            layout: {
                toolbar: 'none',
            }
        });


        this.signinForm = new FormGroup({
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            isUseCookie: new FormControl(false),
        });
    }
    ngOnInit() {

    }
    login() {
        const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
        const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
        if (this.signinForm.valid) {
            const contentParams = this.signinForm.value;

            if (contentParams.isUseCookie == null) {
                contentParams.isUseCookie = false;
            }

            const endpoint = User.Access.SignOn;
            this.Api.callWithOutScope(endpoint.url, endpoint.method, contentParams, '', '').then((response) => {
                const res = response;
                if (res.code === 1) {
                    initialState.status = 'success';
                    initialState.title = res.message;
                    initialState.description = res.description;

                    let cookieExists: boolean = this.cookieService.check('AuthenticationToken');
                    if (cookieExists) {
                        this.cookieService.delete('AuthenticationToken');
                    }

                    const sessionExists: any = this.storage.get('AuthenticationToken');
                    if (sessionExists !== undefined) {
                        this.storage.remove('AuthenticationToken');
                    }

                    this.storage.set('AuthenticationToken', res.authenticationToken);
                    if (contentParams.isUseCookie) {
                        cookieExists = this.cookieService.check('AuthenticationToken');
                        if (!cookieExists) {
                            this.cookieService.set('AuthenticationToken', res.authenticationToken);
                        }
                    }

                    const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
                    bsModalRefObj.content.action.subscribe(result => {
                        if (result.status) {
                            window.location.href = 'home';
                        }
                    });

                } else {
                    initialState.status = 'error';
                    initialState.title = res.message;
                    initialState.description = res.description;

                    const bsModalRefObj = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
                    bsModalRefObj.content.action.subscribe(result => {
                        if (result.status) {
                            this.signinForm.reset();
                        }
                    });
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
            initialState.description = 'กรุณากรอกข้อมูลชื่อผู้ใช้งานหรือข้อมูลรหัสผ่านให้ครบ';
            this.modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
        }
    }
    register() {
        this.router.navigate(['register']);
    }
    forgetPassword() {
        this.router.navigate(['forget-password']);
    }
}
