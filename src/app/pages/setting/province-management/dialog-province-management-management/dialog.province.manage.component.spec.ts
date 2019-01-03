import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProvinceManageComponent } from './dialog.province.manage.component';

describe('DialogProvinceManageComponent', () => {
  let component: DialogProvinceManageComponent;
  let fixture: ComponentFixture<DialogProvinceManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogProvinceManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogProvinceManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
