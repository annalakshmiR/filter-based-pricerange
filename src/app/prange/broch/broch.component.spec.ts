import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrochComponent } from './broch.component';

describe('BrochComponent', () => {
  let component: BrochComponent;
  let fixture: ComponentFixture<BrochComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrochComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrochComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
