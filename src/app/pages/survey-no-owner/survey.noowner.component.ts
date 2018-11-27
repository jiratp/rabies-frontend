import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { RoundAnimalNoOwnerGroup } from './../../model/round.group.model';
import { LazyLoadEvent } from 'primeng/primeng';

@Component({
  selector: 'app-survey-noowner',
  templateUrl: './survey.noowner.component.html',
  styleUrls: ['./survey.noowner.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SurveyNoOwnerComponent implements OnInit {
  tab: string;
  loading: Boolean;
  totalRecords: number;
  roundAnimalNoownerGroup: RoundAnimalNoOwnerGroup[];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.tab = 'report-animal-noowner-group';
    /****** dataTable ******/
    this.totalRecords = 0;
    this.loading = true;

    this.roundAnimalNoownerGroup = [
      {
        roundID: '1',
        roundName: 'รายการขึ้นทะเบียนสัตว์ ปี 2018 ครั้งที่ 2 ',
        roundStartDate: '01/07/2561',
        roundEndDate: '31/12/2561',
        roundStatus: true,
      }
    ];
  }

  tabSelected(tab) {
    this.tab = tab;
  }

  ManageNoOwnerList() {
    this.router.navigate(['survey/animal-no-owner/noowner-information-list']);
  }

  LoadContentLazy(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
