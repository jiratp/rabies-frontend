import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../core/config.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;

    constructor(private router: Router, private themeConfig: ConfigService) {
        this.themeConfig.setSettings({
            layout: {
                toolbar: 'none',
            }
        });

        this.registerForm = new FormGroup({
            customerType: new FormControl('general-customer', Validators.required),
        });
    }

    ngOnInit() {
    }
    home() {
        this.router.navigate(['home']);
    }
}
