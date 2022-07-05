import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazinerangeComponent } from './magazinerange.component';

describe('MagazinerangeComponent', () => {
  let component: MagazinerangeComponent;
  let fixture: ComponentFixture<MagazinerangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagazinerangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazinerangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
