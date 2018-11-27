import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyHasOwnerComponent } from './survey.hasowner.component';

describe('SurveyHasOwnerComponent', () => {
  let component: SurveyHasOwnerComponent;
  let fixture: ComponentFixture<SurveyHasOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyHasOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyHasOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
