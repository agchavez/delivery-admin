import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikerListComponent } from './biker-list.component';

describe('BikerListComponent', () => {
  let component: BikerListComponent;
  let fixture: ComponentFixture<BikerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
