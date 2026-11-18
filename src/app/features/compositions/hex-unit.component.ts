import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BoardUnit } from '../../shared/models/content.models';
import { hideImage } from '../../shared/ui/template.helpers';

@Component({
  selector: 'jr-hex-unit',
  imports: [],
  templateUrl: './hex-unit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
  host: { style: 'display: contents' },
})
export class HexUnitComponent {
  @Input({ required: true }) unit!: BoardUnit;
  get costClass() {
    return this.unit.cost ? `hex-cost-${this.unit.cost}` : 'hex-cost-special';
  }
  get traits() {
    return (this.unit.traits ?? []).slice(0, 3);
  }
  get items() {
    return (this.unit.items ?? []).slice(0, 3);
  }
  readonly hideImage = hideImage;
}
