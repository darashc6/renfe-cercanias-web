import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/models/Announcement';
import { AnnouncementsService } from 'src/app/services/announcements/announcements.service';

@Component({
  selector: 'app-announcements-page',
  templateUrl: './announcements-page.component.html',
  styleUrls: ['./announcements-page.component.scss']
})
export class AnnouncementsPageComponent implements OnInit {
  stations: any[] = [
    {
      id: 'all',
      name: 'Todas las estaciones'
    },
    {
      id: 'cercanias-asturias',
      name: 'Asturias'
    },
    {
      id: 'cercanias-bilbao',
      name: 'Bilbao'
    },
    {
      id: 'cercanias-cadiz',
      name: 'Cádiz'
    },
    {
      id: 'cercanias-malaga',
      name: 'Málaga'
    },
    {
      id: 'murcia-alicante',
      name: 'Murcia/Alicante'
    },
    {
      id: 'cercanias-santander',
      name: 'Santander'
    },
    {
      id: 'cercanias-san-sebastian',
      name: 'San Sebástian'
    },
    {
      id: 'cercanias-sevilla',
      name: 'Sevilla'
    },
    {
      id: 'cercanias-valencia',
      name: 'valencia'
    },
    {
      id: 'cercanias-zaragoza',
      name: 'Zaragoza'
    },
  ]
  selectedStation?: any;
  allAnouncements?: Announcement[];
  selectedAnnouncements?: Announcement[];

  isLoading: boolean = true;


  constructor(private announcementsService: AnnouncementsService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 500);

    this.getAnnouncements();
  }

  onDropdownValueChanged() {
    if (this.selectedStation.id === 'all') {
      this.selectedAnnouncements = this.allAnouncements;
    } else {
      this.selectedAnnouncements = this.allAnouncements?.filter(announcement => announcement.stationId === this.selectedStation.id);
    }
  }

  getAnnouncements() {
    this.announcementsService.getAnnouncements().subscribe(announcements => {
      this.allAnouncements = announcements;
      this.selectedAnnouncements = announcements;
    })
  }
}
