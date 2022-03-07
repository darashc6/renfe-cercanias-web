import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-train-timings-section',
  templateUrl: './search-train-timings-section.component.html',
  styleUrls: ['./search-train-timings-section.component.scss']
})
export class SearchTrainTimingsSectionComponent implements OnInit {
  date: Date = new Date();
  date2: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
