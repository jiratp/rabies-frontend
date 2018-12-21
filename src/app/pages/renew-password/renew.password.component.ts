import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-renew-password',
  templateUrl: './renew.password.component.html',
  styleUrls: ['./renew.password.component.scss']
})
export class RenewPasswordComponent implements OnInit {
  renewPasswordForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.renewPasswordForm = new FormGroup({});
  }

}
