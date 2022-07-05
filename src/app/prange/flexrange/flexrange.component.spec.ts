import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexrangeComponent } from './flexrange.component';

describe('FlexrangeComponent', () => {
  let component: FlexrangeComponent;
  let fixture: ComponentFixture<FlexrangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexrangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
