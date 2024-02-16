import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent {
  @Input()
  photoCover: string ='https://th.bing.com/th/id/OIP.FB4Vo7tHg36cUwDQ2d_tngHaEj?rs=1&pid=ImgDetMain';

  @Input()
  datePost: string = 'Janeiro 01, 1111';

  @Input()
  cardTitle: string = 'Default Card Title';

  @Input()
  cardDescription: string = 'his is the default description for the card.';

  @Input()
  Id: string = '0';
}
