import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicIndividualRegisterComponent } from './clinic.individual.register.component';

describe('ClinicIndividualRegisterComponent', () => {
  let component: ClinicIndividualRegisterComponent;
  let fixture: ComponentFixture<ClinicIndividualRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicIndividualRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicIndividualRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
