import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  currentPage: string;
  constructor(
    private router: Router
  ) {
    this.currentPage = 'home';
  }

  ngOnInit() {
  }

  navigation(page) {
    this.currentPage = page;
    this.router.navigate([page]);
  }

}
