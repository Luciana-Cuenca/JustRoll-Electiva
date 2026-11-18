import { Injectable } from '@angular/core';
import { tutorials, tutorialLevels } from './tutorials';
@Injectable({ providedIn: 'root' })
export class TutorialCatalog {
  readonly tutorials = tutorials;
  readonly levels = tutorialLevels;
  private readonly grouped = new Map(
    tutorialLevels.map((level) => [level.id, tutorials.filter((t) => t.level === level.id)]),
  );
  forLevel(level: string) {
    return this.grouped.get(level) ?? [];
  }
}
