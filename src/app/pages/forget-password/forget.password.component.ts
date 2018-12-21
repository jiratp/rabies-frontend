import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget.password.component.html',
  styleUrls: ['./forget.password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm: FormGroup;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.forgetPasswordForm = new FormGroup({});
  }

  RenewPassword() {
    this.router.navigate(['renew-password']);
  }
}
