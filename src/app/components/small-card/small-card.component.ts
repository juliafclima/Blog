import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent {
  @Input()
  photoCover: string =
    'https://th.bing.com/th/id/OIP.FB4Vo7tHg36cUwDQ2d_tngHaEj?rs=1&pid=ImgDetMain';

  @Input()
  datePost: string = 'Janeiro 01, 1111';

  @Input()
  cardTitle: string = 'Default Card Title';

  @Input()
  Id: string = '0';
}
