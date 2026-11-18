import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ImageInfo } from '../../shared/models/content.models';
import { hideImage } from '../../shared/ui/template.helpers';

@Component({
  selector: 'jr-item-list',
  imports: [],
  templateUrl: './item-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
  host: { style: 'display: contents' },
})
export class ItemListComponent {
  @Input() items: ImageInfo[] = [];
  readonly hideImage = hideImage;
}
