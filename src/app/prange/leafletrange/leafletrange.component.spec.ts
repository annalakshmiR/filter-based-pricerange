import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletrangeComponent } from './leafletrange.component';

describe('LeafletrangeComponent', () => {
  let component: LeafletrangeComponent;
  let fixture: ComponentFixture<LeafletrangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeafletrangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafletrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
