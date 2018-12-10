import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessTransactionComponent } from './access.transaction.component';

describe('AccessTransactionComponent', () => {
  let component: AccessTransactionComponent;
  let fixture: ComponentFixture<AccessTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
