import {
  Component,
  ChangeDetectionStrategy,
  Input,
  output,
  inject,
  ElementRef,
} from '@angular/core';
import { TutorialBlockComponent } from './tutorial-block.component';
import { TutorialQuizComponent } from './tutorial-quiz.component';
import { Tutorial } from '../../shared/models/content.models';
import { LEVEL_LABELS } from '../../shared/ui/template.helpers';
import { ModalDirective } from '../../shared/ui/modal.directive';

@Component({
  selector: 'jr-tutorial-detail',
  imports: [TutorialBlockComponent, TutorialQuizComponent, ModalDirective],
  templateUrl: './tutorial-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
  host: { style: 'display: contents' },
})
export class TutorialDetailComponent {
  @Input({ required: true }) tutorial!: Tutorial;
  @Input() hasPrev = false;
  @Input() hasNext = false;
  @Input() prevTitle = '';
  @Input() nextTitle = '';
  readonly close = output<void>();
  readonly previous = output<void>();
  readonly next = output<void>();
  readonly LEVEL_LABELS = LEVEL_LABELS;
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  get hasContent() {
    return !!this.tutorial.content?.length;
  }
  get hasQuiz() {
    return !!this.tutorial.quiz?.length;
  }
  get headings() {
    return (this.tutorial.content ?? [])
      .filter((b) => b.type === 'heading')
      .map((b, i) => ({ id: `tut-h-${i}`, text: 'text' in b ? b.text : '' }));
  }
  get firstWord() {
    return this.tutorial.title.split(' ')[0];
  }
  get restWords() {
    return this.tutorial.title.split(' ').slice(1).join(' ');
  }
  scrollToHeading(index: number): void {
    this.element.nativeElement
      .querySelectorAll('.tut-block-heading')
      [index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
