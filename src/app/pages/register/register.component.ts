import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../core/config.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
  home() {
    this.router.navigate(['home']);
  }
}
