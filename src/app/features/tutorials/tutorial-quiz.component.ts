import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { QuizQuestion } from '../../shared/models/content.models';

@Component({
  selector: 'jr-tutorial-quiz',
  imports: [],
  templateUrl: './tutorial-quiz.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
  host: { style: 'display: contents' },
})
export class TutorialQuizComponent {
  @Input() questions: QuizQuestion[] = [];
  readonly String = String;
  answers: Record<number, number | undefined> = {};
  submitted: Record<number, boolean> = {};
  handleSelect(qi: number, oi: number): void {
    if (!this.submitted[qi]) this.answers = { ...this.answers, [qi]: oi };
  }
  handleSubmit(qi: number): void {
    if (this.answers[qi] !== undefined) this.submitted = { ...this.submitted, [qi]: true };
  }
  optionClass(qi: number, oi: number): string {
    let cls = 'tut-quiz-option';
    if (this.submitted[qi]) {
      if (oi === this.questions[qi].answer) cls += ' tut-quiz-option--correct';
      else if (oi === this.answers[qi]) cls += ' tut-quiz-option--wrong';
    } else if (this.answers[qi] === oi) cls += ' tut-quiz-option--selected';
    return cls;
  }
}
