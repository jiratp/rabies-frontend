import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { OwnerInfomationGroup } from './../../../model/round.group.model';
import { LazyLoadEvent } from 'primeng/primeng';

@Component({
  selector: 'app-noowner-information-list',
  templateUrl: './noowner.information.list.component.html',
  styleUrls: ['./noowner.information.list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NoOwnerInformationListComponent implements OnInit {
  tab: string;
  loading: Boolean;
  totalRecords: number;
  noOwnerInfomationGroup: OwnerInfomationGroup[];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.tab = 'noowner-information-group';
    /****** dataTable ******/
    this.totalRecords = 0;
    this.loading = true;

  }

  tabSelected(tab) {
    this.tab = tab;
  }

  ManageNoOwnerInformation() {
    this.router.navigate(['survey/animal-no-owner/noowner-information']);
  }

  LoadContentLazy(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
