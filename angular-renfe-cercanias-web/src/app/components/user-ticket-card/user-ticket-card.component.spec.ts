import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTicketCardComponent } from './user-ticket-card.component';

describe('UserTicketCardComponent', () => {
  let component: UserTicketCardComponent;
  let fixture: ComponentFixture<UserTicketCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTicketCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTicketCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
