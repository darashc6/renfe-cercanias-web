import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketFareInfoCardComponent } from './ticket-fare-info-card.component';

describe('TicketFareInfoCardComponent', () => {
  let component: TicketFareInfoCardComponent;
  let fixture: ComponentFixture<TicketFareInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketFareInfoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketFareInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
