import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { sequence } from '../../shared/ui/template.helpers';

@Component({
  selector: 'jr-learning-section',
  imports: [RouterLink],
  templateUrl: './learning-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
  host: { style: 'display: contents' },
})
export class LearningSectionComponent {
  readonly sequence = sequence;
}
