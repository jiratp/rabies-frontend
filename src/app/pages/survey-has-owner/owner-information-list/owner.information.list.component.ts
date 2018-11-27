import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { OwnerInfomationGroup } from './../../../model/round.group.model';
import { LazyLoadEvent } from 'primeng/primeng';

@Component({
  selector: 'app-owner-information-list',
  templateUrl: './owner.information.list.component.html',
  styleUrls: ['./owner.information.list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OwnerInformationListComponent implements OnInit {
  tab: string;
  loading: Boolean;
  totalRecords: number;
  ownerInfomationGroup: OwnerInfomationGroup[];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.tab = 'owner-information-group';
    /****** dataTable ******/
    this.totalRecords = 0;
    this.loading = true;

  }

  tabSelected(tab) {
    this.tab = tab;
  }

  ManageOwnerInformation() {
    this.router.navigate(['survey/animal-has-owner/owner-information']);
  }

  LoadContentLazy(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
