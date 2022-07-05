import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagingrangeComponent } from './packagingrange.component';

describe('PackagingrangeComponent', () => {
  let component: PackagingrangeComponent;
  let fixture: ComponentFixture<PackagingrangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagingrangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagingrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
