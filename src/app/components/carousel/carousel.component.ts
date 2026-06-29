import { Component } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  cards = [
    {
      eyebrow: 'Framework depth',
      title: 'Angular 7-19',
      metric: 'Production range',
      description: 'Hands-on experience evolving Angular applications across multiple major versions, architectures, and enterprise environments.',
      tags: ['Angular', 'TypeScript', 'Scalable UI'],
      accent: 'teal',
    },
    {
      eyebrow: 'Domain',
      title: 'Fintech + AI Products',
      metric: 'Enterprise focus',
      description: 'From digital lending and banking journeys to conversational AI assistants, always with strong product and delivery attention.',
      tags: ['Banking', 'Conversational AI', 'Omnichannel'],
      accent: 'purple',
    },
    {
      eyebrow: 'Platform',
      title: 'Cloud-Native Delivery',
      metric: 'AWS + Azure',
      description: 'Comfortable designing front-end solutions that integrate with modern cloud environments, real-time flows, and distributed systems.',
      tags: ['AWS', 'Azure', 'Docker'],
      accent: 'sand',
    },
    {
      eyebrow: 'Approach',
      title: 'Leadership + Systems Thinking',
      metric: 'Design to delivery',
      description: 'I like connecting architecture, UX collaboration, planning, and mentoring to keep complex products coherent as they scale.',
      tags: ['Leadership', 'Figma', 'Agile'],
      accent: 'slate',
    },
  ];
}
