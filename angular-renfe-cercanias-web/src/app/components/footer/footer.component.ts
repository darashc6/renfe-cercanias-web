import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear: number = 0;
  icons: any[] = [
    {
      logo: 'facebook',
      link: 'https://es-es.facebook.com/Renfe/'
    },
    {
      logo: 'instagram',
      link: 'https://www.instagram.com/renfe/'
    },
    {
      logo: 'twitter',
      link: 'https://twitter.com/Renfe'
    },
    {
      logo: 'youtube',
      link: 'https://www.youtube.com/user/renfe'
    },
    {
      logo: 'linkedin',
      link: 'https://es.linkedin.com/company/renfe'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }

}
