import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Champion } from '../../shared/models/content.models';
import { costColors, hideImage } from '../../shared/ui/template.helpers';

@Component({
  selector: 'jr-champion-portrait',
  imports: [],
  templateUrl: './champion-portrait.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
  host: { style: 'display: contents' },
})
export class ChampionPortraitComponent {
  @Input({ required: true }) champion!: Champion;
  readonly costColors = costColors;
  readonly hideImage = hideImage;
}
