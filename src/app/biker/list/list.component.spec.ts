import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponentB } from './list.component';

describe('ListComponent', () => {
  let component: ListComponentB;
  let fixture: ComponentFixture<ListComponentB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponentB ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponentB);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
