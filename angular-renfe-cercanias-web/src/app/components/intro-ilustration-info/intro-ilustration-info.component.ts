import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-ilustration-info',
  templateUrl: './intro-ilustration-info.component.html',
  styleUrls: ['./intro-ilustration-info.component.scss']
})
export class IntroIlustrationInfoComponent implements OnInit {
  @Input() infoTitle: string = '';
  @Input() infoSubtitle: string = '';
  @Input() infoImgSrc: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
