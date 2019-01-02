import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRegionManageComponent } from './dialog.region.manage.component';

describe('DialogRegionManageComponent', () => {
  let component: DialogRegionManageComponent;
  let fixture: ComponentFixture<DialogRegionManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogRegionManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRegionManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
