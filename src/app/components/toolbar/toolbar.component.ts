import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
    router.events.subscribe((val: any) => {
      if (val.url) {
        const url = val.url.replace('/','');
        this.currentPage = url;
      }
    });
  }

  ngOnInit() {

  }

  navigation(page) {
    this.currentPage = page;
    this.router.navigate([page]);
  }

}
