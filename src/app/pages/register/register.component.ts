import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../core/config.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DialogAlertComponent } from './../../components/dialog-alert/dialog.alert.component';

import { CallApiService } from './../../providers/request.providers';
import { Utility } from './../../api/utility';
import { User } from './../../api/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CallApiService]
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    modalRef: BsModalRef;

    constructor(
        private router: Router,
        private Api: CallApiService,
        private ModalService: BsModalService,
        private themeConfig: ConfigService) {
        this.themeConfig.setSettings({
            layout: {
                toolbar: 'none',
            }
        });

        this.registerForm = new FormGroup({
            name: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            mobileNumber: new FormControl('', Validators.required),
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            confirmPassword: new FormControl('', Validators.required)
        });
    }

    ngOnInit() {
    }
    home() {
        this.router.navigate(['home']);
    }


    onSubmitContent() {
        const initialState = this.themeConfig.defaultSettings.dialogInitialStateSetting;
        const configModal = this.themeConfig.defaultSettings.dialogAlertSetting;
        if (this.registerForm.valid) {
            const contentParams = this.registerForm.value;

            const endpoint = User.Register.Create;
            this.Api.callWithOutScope(endpoint.url, endpoint.method, contentParams, '', '').then((response) => {
                const res = response;
                if (res.code === 1) {
                    initialState.status = 'success';
                    initialState.title = res.message;
                    initialState.description = res.description;
                    initialState.btnOK.redirectURI = 'login';
                } else {
                    initialState.status = 'error';
                    initialState.title = res.message;
                    initialState.description = res.description;
                }
                this.modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
            }).catch((error) => {
                initialState.status = 'error';
                initialState.title = error.error.error.message;
                initialState.description = error.error.error.description;
                this.modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
            });
        } else {
            initialState.status = 'error';
            initialState.title = 'ข้อความจากระบบ';
            initialState.description = 'กรุณากรอกข้อมูลการสมัครสมาชิกให้ครบ';
            this.modalRef = this.ModalService.show(DialogAlertComponent, Object.assign({}, configModal , { initialState }));
        }
    }
}
