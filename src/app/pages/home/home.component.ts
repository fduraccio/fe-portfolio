import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  languages = [
    {
      label: 'Typescript',
      color: '#C69AFF',
    },
    {
      label: 'Angular',
      color: '#9F53FF',
    },
    {
      label: 'Figma',
      color: '#6104D6',
    },
  ];

  skills = [
    { label: 'React JS', icon: 'assets/icons/react-js.svg' },
    { label: 'React Native', icon: 'assets/icons/react-native.svg' },
    { label: 'Next.JS', icon: 'assets/icons/next-js.svg' },
    { label: 'Vite', icon: 'assets/icons/vite.svg' },
    { label: 'Figma', icon: 'assets/icons/figma.svg' },
    { label: 'Jest', icon: 'assets/icons/jest.svg' },
    {
      label: 'React Testing Library',
      icon: 'assets/icons/react-testing-library.svg',
    },
  ];
}
