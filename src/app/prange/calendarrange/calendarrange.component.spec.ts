import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarrangeComponent } from './calendarrange.component';

describe('CalendarrangeComponent', () => {
  let component: CalendarrangeComponent;
  let fixture: ComponentFixture<CalendarrangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarrangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
