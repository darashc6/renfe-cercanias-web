import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Fare } from 'src/app/models/Fare';

@Injectable({
  providedIn: 'root'
})
export class FareService {
  private fareList: Fare[] = [
    {
      id: 'billete-sencillo',
      title: 'Billete sencillo',
      subtitle: 'Válidos para un único viaje',
      type: 'regular',
      content: [
        'Válidos para un único viaje',
        'Su precio varía en función de las zonas que se vayan a recorrer.',
        'Tienes un máximo de dos horas para iniciar tu viaje tras la compra del billete.'
      ],
      prices: [
        {
          zone: '1/2 Zonas',
          price: 1.80
        },
        {
          zone: '3 Zonas',
          price: 2.05
        },
        {
          zone: '4 Zonas',
          price: 2.70
        },
        {
          zone: '5 Zonas',
          price: 3.60
        },
      ]
    },
    {
      id: 'billete-ida-vuelta',
      title: 'Billete ida y vuelta',
      subtitle: 'Válidos para 2 viajes, uno de ida y otro de regreso',
      type: 'regular',
      content: [
        'Válidos para 2 viajes, uno de ida y otro de regreso',
        'Tienes un máximo de dos horas para iniciar tu viaje tras la compra del billete.',
        'El regreso debe realizarse a lo largo del mismo día.'
      ],
      prices: [
        {
          zone: '1/2 Zonas',
          price: 3.60
        },
        {
          zone: '3 Zonas',
          price: 4.10
        },
        {
          zone: '4 Zonas',
          price: 5.40
        },
        {
          zone: '5 Zonas',
          price: 7.20
        },
      ]
    },
    {
      id: 'abono-mensual-limitado',
      title: 'Abono mensual limitado',
      subtitle: 'Para los que viajan todos los días en un mismo recorrido',
      type: 'regular',
      content: [
        'Dos viajes al día durante un mes, independientemente del sentido del viaje.',
        'Siempre en el mismo trayecto que hayas elegido en el momento de la compra del abono.',
        'Es unipersonal, personalizado e intransferible.',
        'Validez: Todos los días durante un mes.'
      ],
      prices: [
        {
          zone: '1/2 Zonas',
          price: 35.80
        },
        {
          zone: '3 Zonas',
          price: 42.00
        },
        {
          zone: '4 Zonas',
          price: 60.85
        },
        {
          zone: '5 Zonas',
          price: 75.70
        },
      ]
    },
    {
      id: 'abono-mensual-ilimitado',
      title: 'Abono mensual ilimitado',
      subtitle: 'Para los que viajan sin limites',
      type: 'regular',
      content: [
        'Viajes ilimitados durante todo el mes.',
        'Siempre en el mismo trayecto que hayas elegido en el momento de la compra del abono.',
        'Es unipersonal, personalizado e intransferible.',
        'Validez: Todos los días durante un mes.'
      ],
      prices: [
        {
          zone: '1/2 Zonas',
          price: 47.85
        },
        {
          zone: '3 Zonas',
          price: 55.30
        },
        {
          zone: '4 Zonas',
          price: 74.70
        },
        {
          zone: '5 Zonas',
          price: 100.15
        }
      ]
    },
    {
      id: 'bonotren',
      title: 'Bonotren',
      subtitle: 'No importa cuanto viajes, también tienes descuento',
      type: 'regular',
      content: [
        'Hasta 10 viajes al mes, de ida o vuelta indistintamente.',
        'Siempre en el mismo trayecto que hayas elegido en el momento de la compra del abono.',
        'No está personalizado y es transferible',
        'Validez: Todos los días durante un mes.'
      ],
      prices: [
        {
          zone: '1/2 Zonas',
          price: 11.95
        },
        {
          zone: '3 Zonas',
          price: 13.85
        },
        {
          zone: '4 Zonas',
          price: 18.70
        },
        {
          zone: '5 Zonas',
          price: 25.05
        },
      ]
    },
    {
      id: 'abono-estudio',
      title: 'Abono estudio',
      subtitle: 'Si eres estudiante, te interesa este abono',
      type: 'regular',
      content: [
        'Viajes ilimitados durante tres meses, en periodo lectivo (1 de octubre al 15 de julio).',
        'Siempre en el mismo trayecto que hayas elegido en el momento de la compra del abono.',
        'Es unipersonal, personalizado e intransferible.',
        'Validez:  1 trimestre (octubre-diciembre/enero-marzo/abril-15 de julio.'
      ],
      prices: [
        {
          zone: '1/2 Zonas',
          price: 89.60
        },
        {
          zone: '3 Zonas',
          price: 111.50
        },
        {
          zone: '4 Zonas',
          price: 171.45
        },
        {
          zone: '5 Zonas',
          price: 210.85
        },
      ]
    },
    {
      id: 'mayores-60',
      title: 'Mayores de 60',
      subtitle: 'Descubre todos los beneficios de la Tarjeta Dorada',
      type: 'discount',
      content: [
        'Si eres mayor de 60 años, puedes beneficiarte de un 40% de descuento en tus billetes sencillos o de ida y vuelta, adquiriendo la Tarjeta Dorada y utilizándola para la compra.',
        'Esta tarjeta, nominativa e intransferible, tiene un precio de 6 € y puede comprarse en las taquillas de las estaciones o en agencias de viaje. Tiene una validez de un año.',
        'El 40% de descuento es aplicable todos los días de la semana.',
        'También pueden adquirir una Tarjeta Dorada los pensionistas mayores de 18 años, en situación de incapacidad física o psíquica permanente total, absoluta o gran invalidez, así como las personas con discapacidad igual o superior al 33%'
      ]
    },
    {
      id: 'ninos-y-jovenes',
      title: 'Niños y jóvenes',
      subtitle: 'Para niños y jóvenes, tus viajes en Cercanías siempre al mejor precio',
      type: 'discount',
      content: [
        'Nos encanta que te muevas en familia. Por eso, los niños menores de 6 años viajan gratis (hasta un máximo de dos niños por billete de adulto).',
        'Si tienes entre 14 y 25 años, Renfe te lo pone fácil. Con la Tarjeta Más Renfe Joven 50, podrás comprar tus billetes de tren a precios adaptados a tu bolsillo. ¡Descubre las ventajas y empieza a viajar!',
        'La Tarjeta Más Renfe Joven 50 te permite beneficiarte de un descuento del 25% en la compra de tus billetes de Cercanías. Además, disfrutarás de todas las ventajas de Más Renfe.',
        'Se trata de una tarjeta nominativa e intransferible y su precio es de 50 €. Al comprarla recibirás tu número de cliente y podrás comprar con descuento. La tarjeta tiene una validez de un año.',
        'Los billetes adquiridos con tu Tarjeta Más Renfe Joven 50 admiten cambios y anulaciones, sujetos a gastos.'
      ]
    },
    {
      id: 'familia-numerosa',
      title: 'Familia Numerosa',
      subtitle: 'Si eres miembre de la Familia Numerosa, tienes derecho a viajar con descuentos',
      type: 'discount',
      content: [
        'Si eres miembro de Familia Numerosa, tienes derecho a viajar con importantes descuentos en todos los trenes de Cercanías.',
        'En los casos de familia numerosa de categoría general, éstos alcanzan el 20%',
        'En los casos de familia numerosa de categoría especial, éstos alcanzan el 50%'
      ]
    },
    {
      id: 'grupos-y-escolares',
      title: 'Grupos y escolares',
      subtitle: 'Los viajes en grupo también tienen descuentos interesantes',
      type: 'discount',
      content: [
        'Los viajes en grupo, a partir de un mínimo de 10 personas, también tienen descuentos interesantes en los trenes de Cercanías',
        'Ida: 30%.',
        'Ida y regreso: 40%.',
        'Los menores de 12 años viajan con un descuento del 50%.',
        'Para grupos escolares, por cada 10 billetes obtendréis uno gratuito.',
        'No olvides ponerte en contacto con nosotros a través del teléfono 952 128 079  (Coordinación de Grupos de Cercanías) para gestionar tu petición de viaje en grupo.'
      ]
    }
  ]

  constructor() { }

  getFares(): Observable<Fare[]> {
    return of(this.fareList);
  }

  getFare(fareId: string): Observable<Fare> {
    let fare = this.fareList.find(fare => fare.id === fareId)

    return of(fare!);
  }
}
