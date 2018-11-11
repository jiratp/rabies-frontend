import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditInformationComponent } from './add-edit-information.component';

describe('AddEditInformationComponent', () => {
  let component: AddEditInformationComponent;
  let fixture: ComponentFixture<AddEditInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
