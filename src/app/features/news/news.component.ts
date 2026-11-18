import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { NewsCardComponent } from './news-card.component';
import { NewsDetailComponent } from './news-detail.component';
import { NewsCatalog } from '../../core/data/news-catalog.service';
import { NewsArticle } from '../../shared/models/content.models';
import { Router } from '@angular/router';

@Component({
  selector: 'jr-news',
  imports: [NewsCardComponent, NewsDetailComponent],
  templateUrl: './news.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
  host: { style: 'display: contents' },
})
export class NewsComponent {
  private readonly catalog = inject(NewsCatalog);
  private readonly router = inject(Router);
  readonly newsSets = this.catalog.sets;
  activeSetId = window.location.hash === '#set-19' ? 'set-19' : 'set-18';
  selectedNews: NewsArticle | null = null;
  get setNews() {
    return this.catalog.forSet(this.activeSetId);
  }
  get featured() {
    return this.setNews.find((n) => n.featured) ?? null;
  }
  get rest() {
    return this.setNews.filter((n) => !n.featured);
  }
  get activeSet() {
    return this.newsSets.find((s) => s.id === this.activeSetId);
  }
  get otherSet() {
    return this.newsSets.find((s) => s.id !== this.activeSetId)!;
  }
  get selectedIndex() {
    return this.selectedNews ? this.setNews.findIndex((n) => n.id === this.selectedNews?.id) : -1;
  }
  handleOpen(item: NewsArticle): void {
    this.selectedNews = item;
  }
  handleClose(): void {
    this.selectedNews = null;
  }
  handlePrev(): void {
    if (this.selectedIndex > 0) this.selectedNews = this.setNews[this.selectedIndex - 1];
  }
  handleNext(): void {
    if (this.selectedIndex < this.setNews.length - 1)
      this.selectedNews = this.setNews[this.selectedIndex + 1];
  }
  handleTabChange(setId: string): void {
    this.activeSetId = setId;
    this.selectedNews = null;
    void this.router.navigate([], {
      fragment: setId === 'set-19' ? 'set-19' : undefined,
      replaceUrl: true,
    });
  }
}
