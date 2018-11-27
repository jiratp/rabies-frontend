import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoOwnerInformationComponent } from './noowner.information.component';

describe('NoOwnerInformationComponent', () => {
  let component: NoOwnerInformationComponent;
  let fixture: ComponentFixture<NoOwnerInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoOwnerInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoOwnerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
