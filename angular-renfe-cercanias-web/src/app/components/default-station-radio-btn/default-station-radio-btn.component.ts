import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-station-radio-btn',
  templateUrl: './default-station-radio-btn.component.html',
  styleUrls: ['./default-station-radio-btn.component.scss']
})
export class DefaultStationRadioBtnComponent implements OnInit {
  @Input() name: string = '';
  @Input() groupName: string = '';
  @Input() selectedStation: string = '';
  city: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
