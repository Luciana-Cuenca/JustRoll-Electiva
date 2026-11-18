import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ContentBlock } from '../../shared/models/content.models';
import { imageFallback } from '../../shared/ui/template.helpers';

@Component({
  selector: 'jr-tutorial-block',
  imports: [],
  templateUrl: './tutorial-block.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
  host: { style: 'display: contents' },
})
export class TutorialBlockComponent {
  @Input({ required: true }) block!: ContentBlock;
  readonly imageFallback = imageFallback;
}
