import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoOwnerInformationListComponent } from './noowner.information.list.component';

describe('NoOwnerInformationListComponent', () => {
  let component: NoOwnerInformationListComponent;
  let fixture: ComponentFixture<NoOwnerInformationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoOwnerInformationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoOwnerInformationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
