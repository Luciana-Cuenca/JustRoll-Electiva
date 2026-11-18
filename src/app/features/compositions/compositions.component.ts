import {
  Component,
  ChangeDetectionStrategy,
  inject,
  DestroyRef,
  ChangeDetectorRef,
} from '@angular/core';
import { TierSectionComponent } from './tier-section.component';
import { CompositionDetailComponent } from './composition-detail.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CompositionCatalog } from '../../core/data/composition-catalog.service';
import { Composition, Tier } from '../../shared/models/content.models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'jr-compositions',
  imports: [TierSectionComponent, CompositionDetailComponent],
  templateUrl: './compositions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
  host: { style: 'display: contents' },
})
export class CompositionsComponent {
  readonly catalog = inject(CompositionCatalog);
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  private readonly changeDetector = inject(ChangeDetectorRef);
  selectedComposition: Composition | null = null;
  readonly tiers: Tier[] = [
    { id: 'S', name: 'EXCELENTE', description: 'Estrategias destacadas.' },
    { id: 'A', name: 'MUY BUENA', description: 'Composiciones muy competitivas.' },
    { id: 'B', name: 'BUENA', description: 'Alternativas equilibradas.' },
    { id: 'C', name: 'SITUACIONAL', description: 'Depende de las condiciones de partida.' },
    { id: 'X', name: 'EXPERIMENTAL', description: 'Estrategias para probar.' },
  ];
  constructor() {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    this.route.queryParamMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      const id = params.get('id');
      if (id) this.selectedComposition = this.catalog.find(id) ?? null;
      this.changeDetector.markForCheck();
    });
  }
}
