import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroComponent } from './hero.component';
import { QuickFeaturesComponent } from './quick-features.component';
import { FeaturedCompositionsComponent } from './featured-compositions.component';
import { LearningSectionComponent } from './learning-section.component';
import { NewsSectionComponent } from './news-section.component';

@Component({
  selector: 'jr-home',
  imports: [
    HeroComponent,
    QuickFeaturesComponent,
    FeaturedCompositionsComponent,
    LearningSectionComponent,
    NewsSectionComponent,
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
  host: { style: 'display: contents' },
})
export class HomeComponent {}
