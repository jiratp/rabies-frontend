import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratorySimplelistComponent } from './laboratory.simplelist.component';

describe('LaboratorySimplelistComponent', () => {
  let component: LaboratorySimplelistComponent;
  let fixture: ComponentFixture<LaboratorySimplelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratorySimplelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratorySimplelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
