import { Component } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  cards = [
    { title: '4 years of XP', description: 'with the most popular ecosystem frontend', color: "transparent" },

    { title: 'Javascript', description: '', color: "#C3C99E", icon: "./assets/img/ts.png", label: "" },
    { title: 'Card 2', description: '', color: "#7D9CA5" },
    { title: 'Card 3', description: '', color: "#C2C2C2" },
  ];
}
