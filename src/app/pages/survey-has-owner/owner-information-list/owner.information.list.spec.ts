import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerInformationListComponent } from './owner.information.list.component';

describe('OwnerInformationListComponent', () => {
  let component: OwnerInformationListComponent;
  let fixture: ComponentFixture<OwnerInformationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerInformationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerInformationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
