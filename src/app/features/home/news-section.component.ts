import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewsCatalog } from '../../core/data/news-catalog.service';
import { hideImage } from '../../shared/ui/template.helpers';

@Component({
  selector: 'jr-news-section',
  imports: [RouterLink],
  templateUrl: './news-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
  host: { style: 'display: contents' },
})
export class NewsSectionComponent {
  private readonly catalog = inject(NewsCatalog);
  readonly newsSets = this.catalog.sets;
  readonly hideImage = hideImage;
}
