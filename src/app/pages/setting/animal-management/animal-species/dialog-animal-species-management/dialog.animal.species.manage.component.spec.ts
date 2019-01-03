import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAnimalSpeciesManageComponent } from './dialog.animal.species.manage.component';

describe('DialogAnimalSpeciesManageComponent', () => {
  let component: DialogAnimalSpeciesManageComponent;
  let fixture: ComponentFixture<DialogAnimalSpeciesManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAnimalSpeciesManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAnimalSpeciesManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
