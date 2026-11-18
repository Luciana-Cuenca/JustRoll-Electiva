import { Injectable } from '@angular/core';
import { news, newsSets } from './news';
@Injectable({ providedIn: 'root' })
export class NewsCatalog {
  readonly sets = newsSets;
  private readonly grouped = new Map(
    newsSets.map((set) => [set.id, news.filter((article) => article.setId === set.id)]),
  );
  forSet(id: string) {
    return this.grouped.get(id) ?? [];
  }
}
