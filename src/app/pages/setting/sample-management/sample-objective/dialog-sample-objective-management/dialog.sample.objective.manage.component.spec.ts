import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSampleObjectiveManageComponent } from './dialog.sample.objective.manage.component';

describe('DialogSampleObjectiveManageComponent', () => {
  let component: DialogSampleObjectiveManageComponent;
  let fixture: ComponentFixture<DialogSampleObjectiveManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSampleObjectiveManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSampleObjectiveManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
