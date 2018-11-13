import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspiciousComponent } from './suspicious.component';

describe('SuspiciousComponent', () => {
  let component: SuspiciousComponent;
  let fixture: ComponentFixture<SuspiciousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspiciousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspiciousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
