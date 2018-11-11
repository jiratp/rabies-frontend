import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../core/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private themeConfig: ConfigService, private cdr: ChangeDetectorRef) {
    this.cdr.detectChanges();
    this.themeConfig.setSettings({
      layout: {
        toolbar: 'none',
      }
    });
  }

  ngOnInit() {
  }
  register() {
    this.router.navigate(['register']);
  }
}
