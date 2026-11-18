import { Component, ChangeDetectionStrategy, Input, output, HostListener } from '@angular/core';
import { NewsBlockComponent } from './news-block.component';
import { NewsArticle } from '../../shared/models/content.models';
import { CATEGORY_COLORS } from '../../shared/ui/template.helpers';
import { ModalDirective } from '../../shared/ui/modal.directive';

@Component({
  selector: 'jr-news-detail',
  imports: [NewsBlockComponent, ModalDirective],
  templateUrl: './news-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
  host: { style: 'display: contents' },
})
export class NewsDetailComponent {
  @Input({ required: true }) newsItem!: NewsArticle;
  @Input() hasPrev = false;
  @Input() hasNext = false;
  readonly close = output<void>();
  readonly previous = output<void>();
  readonly next = output<void>();
  get color() {
    return CATEGORY_COLORS[this.newsItem.category] ?? 'orange';
  }
  get isEmpty() {
    return !this.newsItem.content?.length;
  }
  handleOverlayClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) this.close.emit();
  }
  @HostListener('document:keydown', ['$event']) onKey(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft' && this.hasPrev) this.previous.emit();
    if (event.key === 'ArrowRight' && this.hasNext) this.next.emit();
  }
}
