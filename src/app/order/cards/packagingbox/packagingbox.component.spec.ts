import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagingboxComponent } from './packagingbox.component';

describe('PackagingboxComponent', () => {
  let component: PackagingboxComponent;
  let fixture: ComponentFixture<PackagingboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagingboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagingboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
