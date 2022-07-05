import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryrangeComponent } from './diaryrange.component';

describe('DiaryrangeComponent', () => {
  let component: DiaryrangeComponent;
  let fixture: ComponentFixture<DiaryrangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaryrangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
