import { Component, ChangeDetectionStrategy, Input, output } from '@angular/core';
import { Tutorial } from '../../shared/models/content.models';
import { LEVEL_LABELS, hideImage } from '../../shared/ui/template.helpers';

@Component({
  selector: 'jr-tutorial-card',
  imports: [],
  templateUrl: './tutorial-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
  host: { style: 'display: contents' },
})
export class TutorialCardComponent {
  @Input({ required: true }) tutorial!: Tutorial;
  @Input({ required: true }) globalIndex = 0;
  readonly activate = output<Tutorial>();
  readonly LEVEL_LABELS = LEVEL_LABELS;
  get orderLabel() {
    return String(this.globalIndex + 1).padStart(2, '0');
  }
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.activate.emit(this.tutorial);
    }
  }
  readonly hideImage = hideImage;
}
