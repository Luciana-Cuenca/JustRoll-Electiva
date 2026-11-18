import { Injectable } from '@angular/core';
import compositions from './compositions';
import compositionsTierList from './compositionsTierList';
import champions from './champions';
import { itemMap } from './items';
import type { Champion } from '../../shared/models/content.models';

@Injectable({ providedIn: 'root' })
export class CompositionCatalog {
  readonly featured = compositions;
  readonly compositions = compositionsTierList;
  readonly champions = new Map(champions.map((champion) => [champion.id, champion]));
  readonly items = itemMap;
  private readonly tiers = new Map(
    ['S', 'A', 'B', 'C', 'X'].map((tier) => [
      tier,
      compositionsTierList.filter((c) => c.tier === tier),
    ]),
  );
  forTier(tier: string) {
    return this.tiers.get(tier) ?? [];
  }
  find(id: string) {
    return this.compositions.find((composition) => String(composition.id) === id);
  }
  getChampions(ids: string[] = []): Champion[] {
    return ids
      .slice(0, 9)
      .map((id) => this.champions.get(id))
      .filter((champion): champion is Champion => !!champion);
  }
}
