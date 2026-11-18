import { Component, ChangeDetectionStrategy, Input, output, inject } from '@angular/core';
import { ChampionPortraitComponent } from './champion-portrait.component';
import { ItemListComponent } from './item-list.component';
import { HexBoardComponent } from './hex-board.component';
import { CompositionCatalog } from '../../core/data/composition-catalog.service';
import { Composition } from '../../shared/models/content.models';
import { costColors, hideImage } from '../../shared/ui/template.helpers';
import { ModalDirective } from '../../shared/ui/modal.directive';

@Component({
  selector: 'jr-composition-detail',
  imports: [ChampionPortraitComponent, ItemListComponent, HexBoardComponent, ModalDirective],
  templateUrl: './composition-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
  host: { style: 'display: contents' },
})
export class CompositionDetailComponent {
  @Input({ required: true }) composition!: Composition;
  readonly close = output<void>();
  readonly catalog = inject(CompositionCatalog);
  readonly championMap = this.catalog.champions;
  readonly itemMap = this.catalog.items;
  readonly costColors = costColors;
  get finalChampions() {
    return this.catalog.getChampions(this.composition.finalChampions);
  }
  get startingChampions() {
    return this.catalog.getChampions((this.composition.startingChampions ?? []).slice(0, 4));
  }
  get hasBoard() {
    return !!this.composition.board?.length;
  }
  readonly hideImage = hideImage;
}
