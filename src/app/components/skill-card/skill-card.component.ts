import { Component, Input } from '@angular/core';

@Component({
  selector: 'skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss'],
})
export class SkillCardComponent {
  @Input() title: string = '';
  @Input() items: { label: string; icon?: string }[] = [];

  getBadgeLabel(label: string): string {
    const words = label
      .split(/[\s/&-]+/)
      .map((word) => word.trim())
      .filter(Boolean);

    if (words.length === 0) {
      return '';
    }

    if (words.length === 1) {
      return words[0].slice(0, 2).toUpperCase();
    }

    return words
      .slice(0, 2)
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  }
}
