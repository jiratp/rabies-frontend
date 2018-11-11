import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-edit-information',
  templateUrl: './add-edit-information.component.html',
  styleUrls: ['./add-edit-information.component.css']
})
export class AddEditInformationComponent implements OnInit {
  @Input() type: string;
  constructor() {}

  ngOnInit() {
  }

}
