import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page-option-btn',
  templateUrl: './profile-page-option-btn.component.html',
  styleUrls: ['./profile-page-option-btn.component.scss']
})
export class ProfilePageOptionBtnComponent implements OnInit {
  @Input() icon: string = '';
  @Input() btnName: string = '';
  @Input() isSelected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
