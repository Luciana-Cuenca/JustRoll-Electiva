import { Component, ChangeDetectionStrategy, Input, inject, OnChanges } from '@angular/core';
import { HexUnitComponent } from './hex-unit.component';
import { CompositionCatalog } from '../../core/data/composition-catalog.service';
import { BoardPosition, Trait, BoardUnit } from '../../shared/models/content.models';
import { sequence } from '../../shared/ui/template.helpers';

@Component({
  selector: 'jr-hex-board',
  imports: [HexUnitComponent],
  templateUrl: './hex-board.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
  host: { style: 'display: contents' },
})
export class HexBoardComponent implements OnChanges {
  @Input() units: BoardPosition[] = [];
  @Input() activeTraits: Trait[] = [];
  readonly ROWS = 4;
  readonly COLUMNS = 7;
  private readonly catalog = inject(CompositionCatalog);
  occupiedCells = new Map<string, BoardUnit>();
  ngOnChanges(): void {
    const occupied = new Map<string, BoardUnit>();
    for (const unit of this.units) {
      const champion = this.catalog.champions.get(unit.championId);
      const key = `${unit.row}-${unit.col}`;
      if (champion && !occupied.has(key))
        occupied.set(key, { ...champion, ...unit, id: unit.championId, items: unit.items ?? [] });
    }
    this.occupiedCells = occupied;
  }
  readonly sequence = sequence;
}
