import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { LoginService } from '../../providers/login/login.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  currentPage: string;
  onSigninChange: Subscription;
  userName: string;
  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
    this.currentPage = 'home';
    router.events.subscribe((val: any) => {
      if (val.url) {
        let url = val.url.replace('/', '');
        if (url == 'news' || url == 'news-detail') {
          url = 'home';
        }
        this.currentPage = url;
      }
    });
    this.onSigninChange = this.loginService.onSignin.subscribe(data => {
      this.userName = data;
    });
  }

  ngOnInit() {

  }

  navigation(page) {
    this.currentPage = page;
    this.router.navigate([page]);
  }

}
