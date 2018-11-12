import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChangePasswordComponent } from './modals/change-password/change-password.component';
import { ChangeMapComponent } from './modals/change-map/change-map.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  modalOption: any = { size: 'lg' };

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  changePassword() {
    const modalRef = this.modalService.open(ChangePasswordComponent, this.modalOption);
  }
  changeMap() {
    const modalRef = this.modalService.open(ChangeMapComponent, this.modalOption);
  }
}
