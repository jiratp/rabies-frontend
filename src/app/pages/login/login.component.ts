import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../core/config.service';
import { LoginService } from '../../providers/login/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;
  constructor(private router: Router,
    private themeConfig: ConfigService,
    private cdr: ChangeDetectorRef,
    private loginService: LoginService) {
    // this.cdr.detectChanges();
    this.themeConfig.setSettings({
      layout: {
        toolbar: 'none',
      }
    });
    this.signinForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }
  login() {
    if (this.signinForm.value.username && this.signinForm.value.password) {
      if (this.signinForm.value.username === 'user') {
        this.loginService.sendData('user');
        this.router.navigate(['home']);
      } else if (this.signinForm.value.username === 'admin') {
        this.loginService.sendData('admin');
        this.router.navigate(['home']);
      }
    }
  }
  register() {
    this.router.navigate(['register']);
  }
}
