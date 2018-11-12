import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

  newsDetail(){
    this.router.navigate(['news-detail']);
  }

}
