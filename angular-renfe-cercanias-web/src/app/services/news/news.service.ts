import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsInfo } from 'src/app/models/NewsInfo';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news: NewsInfo[] = [
    {
      id: '1',
      date: '15/02/2022',
      title: 'Renfe convoca una oferta de empleo público para incorporar a cerca de 1.000 nuevos trabajadores',
      content: [
        'Renfe publicará mañana las bases de la convocatoria de la Oferta Pública de Empleo (OPE) 2022, que permitirá incorporar a cerca de 1.000 nuevos trabajadores en los ámbitos de conducción y operador comercial de la compañía.',
        'En concreto, se convocan 600 plazas de maquinistas, de las que 430 corresponden para servicios de ámbito estatal, con ubicación geográfica a determinar por el Grupo Renfe atendiendo a las necesidades existentes; 150 correspondientes a cuadros de servicio de tráficos en el ámbito de Cataluña, Extremadura, Miranda de Ebro y Zaragoza, y 20 para servicios de tráficos transfronterizos: 8 en Irún, 8 en Portbou y 4 en Barcelona.',
        'Asimismo, la OPE contempla la convocatoria de 375 plazas de operadores comerciales N2 (300 de ámbito estatal y 75 para Cataluña), lo que supone 70 plazas más que la oferta de empleo de 2021.',
        'Los puestos de trabajo tendrán como referencia las condiciones laborales y retributivas establecidas en el Convenio Colectivo del Grupo Renfe y los aspirantes deberán reunir, a 27 de febrero de 2022, los requisitos específicos detallados en la convocatoria, que se puede encontrar a partir de mañana en la web de Renfe.'
      ]
    },
    {
      id: '2',
      date: '14/02/2022',
      title: 'Renfe invierte 100 millones en la transformación digital de Cercanías y Media Distancia',
      content: [
        'Renfe publicará mañana las bases de la convocatoria de la Oferta Pública de Empleo (OPE) 2022, que permitirá incorporar a cerca de 1.000 nuevos trabajadores en los ámbitos de conducción y operador comercial de la compañía.',
        'En concreto, se convocan 600 plazas de maquinistas, de las que 430 corresponden para servicios de ámbito estatal, con ubicación geográfica a determinar por el Grupo Renfe atendiendo a las necesidades existentes; 150 correspondientes a cuadros de servicio de tráficos en el ámbito de Cataluña, Extremadura, Miranda de Ebro y Zaragoza, y 20 para servicios de tráficos transfronterizos: 8 en Irún, 8 en Portbou y 4 en Barcelona.',
        'Asimismo, la OPE contempla la convocatoria de 375 plazas de operadores comerciales N2 (300 de ámbito estatal y 75 para Cataluña), lo que supone 70 plazas más que la oferta de empleo de 2021.',
        'Los puestos de trabajo tendrán como referencia las condiciones laborales y retributivas establecidas en el Convenio Colectivo del Grupo Renfe y los aspirantes deberán reunir, a 27 de febrero de 2022, los requisitos específicos detallados en la convocatoria, que se puede encontrar a partir de mañana en la web de Renfe.'
      ]
    },
    {
      id: '3',
      date: '08/02/2022',
      title: 'Renfe implementa sistemas de inteligencia artificial a los equipos de videovigilancia de cerca de 500 estaciones de Cercanías',
      content: [
        'Renfe publicará mañana las bases de la convocatoria de la Oferta Pública de Empleo (OPE) 2022, que permitirá incorporar a cerca de 1.000 nuevos trabajadores en los ámbitos de conducción y operador comercial de la compañía.',
        'En concreto, se convocan 600 plazas de maquinistas, de las que 430 corresponden para servicios de ámbito estatal, con ubicación geográfica a determinar por el Grupo Renfe atendiendo a las necesidades existentes; 150 correspondientes a cuadros de servicio de tráficos en el ámbito de Cataluña, Extremadura, Miranda de Ebro y Zaragoza, y 20 para servicios de tráficos transfronterizos: 8 en Irún, 8 en Portbou y 4 en Barcelona.',
        'Asimismo, la OPE contempla la convocatoria de 375 plazas de operadores comerciales N2 (300 de ámbito estatal y 75 para Cataluña), lo que supone 70 plazas más que la oferta de empleo de 2021.',
        'Los puestos de trabajo tendrán como referencia las condiciones laborales y retributivas establecidas en el Convenio Colectivo del Grupo Renfe y los aspirantes deberán reunir, a 27 de febrero de 2022, los requisitos específicos detallados en la convocatoria, que se puede encontrar a partir de mañana en la web de Renfe.'
      ]
    },
    {
      id: '4',
      date: '01/02/2022',
      title: 'El Cercanías de la Costa recupera desde hoy la frecuencia de 20 minutos la mayor parte del día',
      content: [
        'Renfe publicará mañana las bases de la convocatoria de la Oferta Pública de Empleo (OPE) 2022, que permitirá incorporar a cerca de 1.000 nuevos trabajadores en los ámbitos de conducción y operador comercial de la compañía.',
        'En concreto, se convocan 600 plazas de maquinistas, de las que 430 corresponden para servicios de ámbito estatal, con ubicación geográfica a determinar por el Grupo Renfe atendiendo a las necesidades existentes; 150 correspondientes a cuadros de servicio de tráficos en el ámbito de Cataluña, Extremadura, Miranda de Ebro y Zaragoza, y 20 para servicios de tráficos transfronterizos: 8 en Irún, 8 en Portbou y 4 en Barcelona.',
        'Asimismo, la OPE contempla la convocatoria de 375 plazas de operadores comerciales N2 (300 de ámbito estatal y 75 para Cataluña), lo que supone 70 plazas más que la oferta de empleo de 2021.',
        'Los puestos de trabajo tendrán como referencia las condiciones laborales y retributivas establecidas en el Convenio Colectivo del Grupo Renfe y los aspirantes deberán reunir, a 27 de febrero de 2022, los requisitos específicos detallados en la convocatoria, que se puede encontrar a partir de mañana en la web de Renfe.'
      ]
    },
    {
      id: '5',
      date: '28/01/2022',
      title: 'Renfe invertirá 37 millones de euros en la mejora de los sistemas de comunicaciones de trenes de Cercanías y Media Distancia',
      content: [
        'Renfe publicará mañana las bases de la convocatoria de la Oferta Pública de Empleo (OPE) 2022, que permitirá incorporar a cerca de 1.000 nuevos trabajadores en los ámbitos de conducción y operador comercial de la compañía.',
        'En concreto, se convocan 600 plazas de maquinistas, de las que 430 corresponden para servicios de ámbito estatal, con ubicación geográfica a determinar por el Grupo Renfe atendiendo a las necesidades existentes; 150 correspondientes a cuadros de servicio de tráficos en el ámbito de Cataluña, Extremadura, Miranda de Ebro y Zaragoza, y 20 para servicios de tráficos transfronterizos: 8 en Irún, 8 en Portbou y 4 en Barcelona.',
        'Asimismo, la OPE contempla la convocatoria de 375 plazas de operadores comerciales N2 (300 de ámbito estatal y 75 para Cataluña), lo que supone 70 plazas más que la oferta de empleo de 2021.',
        'Los puestos de trabajo tendrán como referencia las condiciones laborales y retributivas establecidas en el Convenio Colectivo del Grupo Renfe y los aspirantes deberán reunir, a 27 de febrero de 2022, los requisitos específicos detallados en la convocatoria, que se puede encontrar a partir de mañana en la web de Renfe.'
      ]
    },
    {
      id: '6',
      date: '25/01/2022',
      title: 'Cercanías Madrid transportó a 160 millones de personas en 2021, un 16,8% más que el año anterior',
      content: [
        'Renfe publicará mañana las bases de la convocatoria de la Oferta Pública de Empleo (OPE) 2022, que permitirá incorporar a cerca de 1.000 nuevos trabajadores en los ámbitos de conducción y operador comercial de la compañía.',
        'En concreto, se convocan 600 plazas de maquinistas, de las que 430 corresponden para servicios de ámbito estatal, con ubicación geográfica a determinar por el Grupo Renfe atendiendo a las necesidades existentes; 150 correspondientes a cuadros de servicio de tráficos en el ámbito de Cataluña, Extremadura, Miranda de Ebro y Zaragoza, y 20 para servicios de tráficos transfronterizos: 8 en Irún, 8 en Portbou y 4 en Barcelona.',
        'Asimismo, la OPE contempla la convocatoria de 375 plazas de operadores comerciales N2 (300 de ámbito estatal y 75 para Cataluña), lo que supone 70 plazas más que la oferta de empleo de 2021.',
        'Los puestos de trabajo tendrán como referencia las condiciones laborales y retributivas establecidas en el Convenio Colectivo del Grupo Renfe y los aspirantes deberán reunir, a 27 de febrero de 2022, los requisitos específicos detallados en la convocatoria, que se puede encontrar a partir de mañana en la web de Renfe.'
      ]
    }
  ]

  constructor() { }

  getNews(): Observable<NewsInfo[]> {
    return of(this.news);
  }

  getNewsInfo(id: string): Observable<NewsInfo> {
    const newsInfo: NewsInfo = this.news.find((news: NewsInfo) => news.id === id)!;

    return of(newsInfo);
  }
}
