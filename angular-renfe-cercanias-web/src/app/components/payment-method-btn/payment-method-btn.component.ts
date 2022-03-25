import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-method-btn',
  templateUrl: './payment-method-btn.component.html',
  styleUrls: ['./payment-method-btn.component.scss']
})
export class PaymentMethodBtnComponent implements OnInit {
  @Input() icon: string = '';
  @Input() btnName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
