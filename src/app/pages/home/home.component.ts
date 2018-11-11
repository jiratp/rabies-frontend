import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tab: string;
  constructor() {
    this.tab = 'news';
  }

  ngOnInit() {
  }

  tabSelected(tab) {
    this.tab = tab;
  }

}
