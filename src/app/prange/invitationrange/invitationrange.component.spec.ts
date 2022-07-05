import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationrangeComponent } from './invitationrange.component';

describe('InvitationrangeComponent', () => {
  let component: InvitationrangeComponent;
  let fixture: ComponentFixture<InvitationrangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitationrangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
