import { Component, ChangeDetectionStrategy, Input, output } from '@angular/core';
import { CompositionCardComponent } from './composition-card.component';
import { Composition, Tier } from '../../shared/models/content.models';

@Component({
  selector: 'jr-tier-section',
  imports: [CompositionCardComponent],
  templateUrl: './tier-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
  host: { style: 'display: contents' },
})
export class TierSectionComponent {
  @Input({ required: true }) tier!: Tier;
  @Input() compositions: Composition[] = [];
  readonly selectComposition = output<Composition>();
}
