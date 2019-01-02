import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dialog-alert',
  templateUrl: './dialog.alert.component.html',
  styleUrls: ['./dialog.alert.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DialogAlertComponent implements OnInit {
  @Output() action = new EventEmitter();

  status: any;
  title: any;
  description: any;
  btnOK: any;
  btnCancel: any;
  constructor(
    private router: Router,
    public modalRef: BsModalRef
  ) { }

  ngOnInit() { }

  endProcessOk() {
    this.action.emit({status: true});
    this.modalRef.hide();
  }

  endProcessCancel() {
    this.action.emit({status: false});
    this.modalRef.hide();
  }

  redirectURL(uri: any) {
    this.modalRef.hide();
    window.location.href = uri;
  }

  refreshPages() {
    window.location.reload();
  }
}
