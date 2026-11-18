import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { sequence } from '../../shared/ui/template.helpers';

@Component({
  selector: 'jr-hero',
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
  host: { style: 'display: contents' },
})
export class HeroComponent {
  readonly sequence = sequence;
}
