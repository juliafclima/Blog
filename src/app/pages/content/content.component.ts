import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { dataFake } from '../../data/data-fake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string =
    'https://th.bing.com/th/id/OIP.FB4Vo7tHg36cUwDQ2d_tngHaEj?rs=1&pid=ImgDetMain';
  contentDate: string = 'Janeiro 01, 1111';
  contentTitle: string = 'Default Card Title';
  contentDescription: string = 'his is the default description for the card.';
  linkNews: string = '#';

  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get('id');
    });

    this.setValueToComponent(this.id);
  }

  setValueToComponent(id: string | null) {
    const result = dataFake.filter((article) => article.id == id)[0];

    this.photoCover = result.photoCover;
    this.contentDate = result.date;
    this.contentTitle = result.title;
    this.contentDescription = result.descricao;
    this.linkNews = result.linkNews;
  }
}
