import { Component, ChangeDetectionStrategy, Input, output } from '@angular/core';
import { Composition } from '../../shared/models/content.models';
import { hideImage } from '../../shared/ui/template.helpers';

@Component({
  selector: 'jr-composition-card',
  imports: [],
  templateUrl: './composition-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
  host: { style: 'display: contents' },
})
export class CompositionCardComponent {
  @Input({ required: true }) composition!: Composition;
  readonly selectComposition = output<Composition>();
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.selectComposition.emit(this.composition);
    }
  }
  readonly hideImage = hideImage;
}
