import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalSuspiciousComponent } from './animal.suspicious.component';

describe('AnimalSuspiciousComponent', () => {
  let component: AnimalSuspiciousComponent;
  let fixture: ComponentFixture<AnimalSuspiciousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalSuspiciousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalSuspiciousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
