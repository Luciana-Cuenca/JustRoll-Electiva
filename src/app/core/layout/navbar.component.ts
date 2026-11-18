import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { hideImage } from '../../shared/ui/template.helpers';

@Component({
  selector: 'jr-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
  host: { style: 'display: contents' },
})
export class NavbarComponent {
  menuOpen = false;
  closeMenu(): void {
    this.menuOpen = false;
  }
  readonly hideImage = hideImage;
}
