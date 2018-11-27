import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  display: Boolean = false;
  currentPage: string;

  constructor(
    private router: Router
  ) {

    router.events.subscribe((value: any) => {
      if (value.url) {
        const url = value.url.replace('/', '');
        switch (url) {
          case 'home':
            this.currentPage = 'home';
            break;
          case 'information':
            this.currentPage = 'information';
            break;
          case 'survey/dashboard':
            this.currentPage = 'survey/dashboard';
            break;
          case 'survey/animal-has-owner':
            this.currentPage = 'survey/animal-has-owner';
            break;
          case 'survey/animal-no-owner':
            this.currentPage = 'survey/animal-no-owner';
            break;
          case 'simple/dashboard':
            this.currentPage = 'simple/dashboard';
            break;
          case 'simple/animal-simple-list':
            this.currentPage = 'simple/animal-simple-list';
            break;
          case 'laboratory/dashboard':
            this.currentPage = 'laboratory/dashboard';
            break;
          case 'laboratory/laboratory-simple-list':
            this.currentPage = 'laboratory/laboratory-simple-list';
            break;
          case 'survey/animal-has-owner/owner-information':
            this.currentPage = 'survey/animal-has-owner/owner-information';
            break;
          case 'survey/animal-has-owner/owner-information-list':
            this.currentPage = 'survey/animal-has-owner/owner-information-list';
            break;
          case 'survey/animal-no-owner/noowner-information-list':
            this.currentPage = 'survey/animal-no-owner/noowner-information-list';
            break;
          case 'survey/animal-no-owner/noowner-information':
            this.currentPage = 'survey/animal-no-owner/noowner-information';
            break;
          default:
            this.currentPage = 'home';
        }
      }
    });

  }

  ngOnInit() {

  }

  navigation(page) {
    this.currentPage = page;
    this.router.navigate([page]);
  }

  toggleSidebar(display) {
   this.display = !display;
  }
}


