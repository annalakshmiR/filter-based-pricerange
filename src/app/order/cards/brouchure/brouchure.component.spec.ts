import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrouchureComponent } from './brouchure.component';

describe('BrouchureComponent', () => {
  let component: BrouchureComponent;
  let fixture: ComponentFixture<BrouchureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrouchureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrouchureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
