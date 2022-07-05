import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebookrangeComponent } from './notebookrange.component';

describe('NotebookrangeComponent', () => {
  let component: NotebookrangeComponent;
  let fixture: ComponentFixture<NotebookrangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotebookrangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotebookrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
