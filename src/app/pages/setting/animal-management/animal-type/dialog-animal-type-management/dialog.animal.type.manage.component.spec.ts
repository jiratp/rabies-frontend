import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAnimalTypeManageComponent } from './dialog.animal.type.manage.component';

describe('DialogAnimalTypeManageComponent', () => {
  let component: DialogAnimalTypeManageComponent;
  let fixture: ComponentFixture<DialogAnimalTypeManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAnimalTypeManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAnimalTypeManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
