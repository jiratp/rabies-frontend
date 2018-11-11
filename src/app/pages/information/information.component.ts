import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEditInformationComponent } from './modals/add-edit-information/add-edit-information.component';
import { ViewInformationComponent } from './modals/view-information/view-information.component';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  modalOption: any = { size: 'lg' };

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  addInformation() {
    const modalRef = this.modalService.open(AddEditInformationComponent, this.modalOption);
    modalRef.componentInstance.type = 'เพิ่ม';
  }
  editInformation() {
    const modalRef = this.modalService.open(AddEditInformationComponent, this.modalOption);
    modalRef.componentInstance.type = 'แก้ไข';
  }
  viewInformation() {
    const modalRef = this.modalService.open(ViewInformationComponent, this.modalOption);
  }
}
