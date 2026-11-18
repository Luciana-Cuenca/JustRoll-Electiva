import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CompositionCatalog } from '../../core/data/composition-catalog.service';
import { hideImage } from '../../shared/ui/template.helpers';

@Component({
  selector: 'jr-featured-compositions',
  imports: [RouterLink],
  templateUrl: './featured-compositions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
  host: { style: 'display: contents' },
})
export class FeaturedCompositionsComponent {
  private readonly catalog = inject(CompositionCatalog);
  readonly compositions = this.catalog.featured;
  readonly hideImage = hideImage;
}
