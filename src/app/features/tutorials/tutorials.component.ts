import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ProgressConnectorComponent } from './progress-connector.component';
import { TutorialCardComponent } from './tutorial-card.component';
import { TutorialDetailComponent } from './tutorial-detail.component';
import { TutorialCatalog } from '../../core/data/tutorial-catalog.service';
import { Tutorial } from '../../shared/models/content.models';
import { sequence } from '../../shared/ui/template.helpers';

@Component({
  selector: 'jr-tutorials',
  imports: [ProgressConnectorComponent, TutorialCardComponent, TutorialDetailComponent],
  templateUrl: './tutorials.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
  host: { style: 'display: contents' },
})
export class TutorialsComponent {
  private readonly catalog = inject(TutorialCatalog);
  readonly ALL_TUTORIALS = this.catalog.tutorials;
  readonly tutorialLevels = this.catalog.levels;
  selectedTutorial: Tutorial | null = null;
  get selectedIndex() {
    return this.selectedTutorial
      ? this.ALL_TUTORIALS.findIndex((t) => t.id === this.selectedTutorial?.id)
      : -1;
  }
  forLevel(level: string) {
    return this.catalog.forLevel(level);
  }
  indexOf(tutorial: Tutorial) {
    return this.ALL_TUTORIALS.indexOf(tutorial);
  }
  handleOpen(tutorial: Tutorial): void {
    this.selectedTutorial = tutorial;
  }
  handleClose(): void {
    this.selectedTutorial = null;
  }
  handlePrev(): void {
    if (this.selectedIndex > 0) this.selectedTutorial = this.ALL_TUTORIALS[this.selectedIndex - 1];
  }
  handleNext(): void {
    if (this.selectedIndex < this.ALL_TUTORIALS.length - 1)
      this.selectedTutorial = this.ALL_TUTORIALS[this.selectedIndex + 1];
  }
  readonly sequence = sequence;
}
