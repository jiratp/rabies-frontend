import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dialog-alert',
  templateUrl: './dialog.alert.component.html',
  styleUrls: ['./dialog.alert.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DialogAlertComponent implements OnInit {
  responseStatus: string;
  constructor(
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.responseStatus = 'success'; // success || error
  }

  endProcessClose() {
    this.modalRef.hide();
  }
}
