import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikerListCandidateComponent } from './biker-list-candidate.component';

describe('BikerListCandidateComponent', () => {
  let component: BikerListCandidateComponent;
  let fixture: ComponentFixture<BikerListCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikerListCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikerListCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
