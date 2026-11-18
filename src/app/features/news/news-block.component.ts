import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ContentBlock } from '../../shared/models/content.models';

@Component({
  selector: 'jr-news-block',
  imports: [],
  templateUrl: './news-block.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
  host: { style: 'display: contents' },
})
export class NewsBlockComponent {
  @Input({ required: true }) block!: ContentBlock;
}
