import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAnimalSymptomManageComponent } from './dialog.animal.symptom.manage.component';

describe('DialogAnimalSymptomManageComponent', () => {
  let component: DialogAnimalSymptomManageComponent;
  let fixture: ComponentFixture<DialogAnimalSymptomManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAnimalSymptomManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAnimalSymptomManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
