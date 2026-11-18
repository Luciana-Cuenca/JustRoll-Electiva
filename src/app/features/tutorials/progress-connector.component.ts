import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'jr-progress-connector',
  imports: [],
  templateUrl: './progress-connector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
  host: { style: 'display: contents' },
})
export class ProgressConnectorComponent {
  @Input({ required: true }) fromColor!: string;
  @Input({ required: true }) toColor!: string;
}
