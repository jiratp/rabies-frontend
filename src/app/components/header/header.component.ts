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
        let url = value.url.replace('/', '');

        const isParamQuery = url.search('/?/');
        if (isParamQuery > 0) {
          const arrStr = url.split('?');
          url = arrStr[0];
        }
        switch (url) {
          case 'home':
            this.currentPage = 'home';
            break;
          case 'information/individual':
            this.currentPage = 'information/individual';
            break;
          case 'information/individual/register':
            this.currentPage = 'information/individual/register';
            break;
          case 'information/clinic':
            this.currentPage = 'information/clinic';
            break;
          case 'information/clinic/individual':
            this.currentPage = 'information/clinic/individual';
            break;
          case 'information/clinic/individual/register':
            this.currentPage = 'information/clinic/individual/register';
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
          case 'sample/animal-sample-list':
            this.currentPage = 'sample/animal-sample-list';
            break;
          case 'sample/animal-sample-form':
            this.currentPage = 'sample/animal-sample-form';
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
          case 'suspicious':
            this.currentPage = 'suspicious';
            break;

          case 'setting/user-management':
            this.currentPage = 'setting/user-management';
            break;
          case 'setting/permission-management':
            this.currentPage = 'setting/permission-management';
            break;
          case 'setting/access-transaction':
            this.currentPage = 'setting/access-transaction';
            break;
          case 'setting/region-management':
            this.currentPage = 'setting/region-management';
            break;
          case 'setting/province-management':
            this.currentPage = 'setting/province-management';
            break;
          case 'setting/district-management':
            this.currentPage = 'setting/district-management';
            break;
          case 'setting/subdistrict-management':
            this.currentPage = 'setting/subdistrict-management';
            break;
          case 'setting/department-management':
            this.currentPage = 'setting/department-management';
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


