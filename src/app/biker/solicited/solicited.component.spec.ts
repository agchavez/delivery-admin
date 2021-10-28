import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitedComponent } from './solicited.component';

describe('SolicitedComponent', () => {
  let component: SolicitedComponent;
  let fixture: ComponentFixture<SolicitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
