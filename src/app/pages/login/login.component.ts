import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { DialogAlertComponent } from './../../components/dialog-alert/dialog.alert.component';

import { ConfigService } from '../../core/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class LoginComponent implements OnInit {
    modalRef: BsModalRef;
    signinForm: FormGroup;
    constructor(
        private router: Router,
        private ModalService: BsModalService,
        private themeConfig: ConfigService
    ) {

        this.themeConfig.setSettings({
            layout: {
                toolbar: 'none',
            }
        });


        this.signinForm = new FormGroup({
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            cookieChecked: new FormControl(false),
        });
    }
    ngOnInit() {

    }
    login() {
        this.modalRef = this.ModalService.show(DialogAlertComponent, this.themeConfig.defaultSettings.dialogAlertSetting);
    }
    register() {
        this.router.navigate(['register']);
    }
    forgetPassword() {
        this.router.navigate(['forget-password']);
    }
}
