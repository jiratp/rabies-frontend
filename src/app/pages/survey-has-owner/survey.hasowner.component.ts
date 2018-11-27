import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { RoundAnimalOwnerGroup } from './../../model/round.group.model';
import { LazyLoadEvent } from 'primeng/primeng';

@Component({
  selector: 'app-survey-hasowner',
  templateUrl: './survey.hasowner.component.html',
  styleUrls: ['./survey.hasowner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SurveyHasOwnerComponent implements OnInit {
  tab: string;
  loading: Boolean;
  totalRecords: number;
  roundAnimalOwnerGroup: RoundAnimalOwnerGroup[];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.tab = 'report-animal-owner-group';
    /****** dataTable ******/
    this.totalRecords = 0;
    this.loading = true;

    this.roundAnimalOwnerGroup = [
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

  ManageOwnerList() {
    this.router.navigate(['survey/animal-has-owner/owner-information-list']);
  }

  LoadContentLazy(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
