import { Component, ChangeDetectionStrategy, Input, output } from '@angular/core';
import { NewsArticle } from '../../shared/models/content.models';
import { CATEGORY_COLORS } from '../../shared/ui/template.helpers';

@Component({
  selector: 'jr-news-card',
  imports: [],
  templateUrl: './news-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
  host: { style: 'display: contents' },
})
export class NewsCardComponent {
  @Input({ required: true }) newsItem!: NewsArticle;
  @Input() featured = false;
  readonly activate = output<NewsArticle>();
  get color() {
    return CATEGORY_COLORS[this.newsItem.category] ?? 'orange';
  }
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.activate.emit(this.newsItem);
    }
  }
}
