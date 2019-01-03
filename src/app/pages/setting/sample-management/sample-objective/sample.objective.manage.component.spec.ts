import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleObjectiveManageComponent } from './sample.objective.manage.component';

describe('SampleObjectiveManageComponent', () => {
  let component: SampleObjectiveManageComponent;
  let fixture: ComponentFixture<SampleObjectiveManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleObjectiveManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleObjectiveManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
