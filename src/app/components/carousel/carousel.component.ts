import { Component } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  cards = [
    { title: '4 years of XP', description: 'with the most popular ecosystem frontend', color: "transparent" },
    { title: 'Typescript', description: '', color: "#C3C99E", label: "", icon: "" },
    { title: 'Angular', description: '', color: "#7D9CA5" },
    { title: 'CSS', description: '', color: "#C2C2C2" },
  ];
}
