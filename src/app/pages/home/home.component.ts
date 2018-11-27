import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  dogChecked: Boolean = true;
  tab: string;
  constructor(
    private router: Router
  ) {
    this.tab = 'news';
  }

  ngOnInit() {
  }

  tabSelected(tab) {
    this.tab = tab;
  }

  newsDetail() {
    this.router.navigate(['news-detail']);
  }

}
