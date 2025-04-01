import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resuable-banners';
  bannerCardsList = [
    {
      id: 1,
      headerText: 'The Seasons Latest',
      description: 'Get the seasons all latest designs in a flick of your hand',
      className: 'card-1',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/reusable-banners-card-1-bg.png'
    },
    {
      id: 2,
      headerText: 'Our New Designs',
      description: 'Get the designs developed by our in-house team all for yourself',
      className: 'card-2',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/reusable-banners-card-2-bg.png'
    },
    {
      id: 3,
      headerText: 'Insiders',
      description: 'Get the top class products for yourself with an extra off',
      className: 'card-3',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/reusable-banners-card-3-bg.png'
    }
  ];
}
