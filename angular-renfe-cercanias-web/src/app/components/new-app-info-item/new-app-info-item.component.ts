import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-app-info-item',
  templateUrl: './new-app-info-item.component.html',
  styleUrls: ['./new-app-info-item.component.scss']
})
export class NewAppInfoItemComponent implements OnInit {
  @Input() icon: string = '';
  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
