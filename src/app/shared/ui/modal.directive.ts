import { DOCUMENT } from '@angular/common';
import {
  afterNextRender,
  Directive,
  ElementRef,
  HostListener,
  inject,
  OnDestroy,
  output,
} from '@angular/core';

/** Owns the modal's keyboard, focus and scroll lifecycle, independent of feature data. */
@Directive({ selector: '[jrModal]' })
export class ModalDirective implements OnDestroy {
  readonly modalClose = output<void>();
  private readonly document = inject(DOCUMENT);
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly previousOverflow = this.document.body.style.overflow;
  private readonly previousFocus = this.document.activeElement as HTMLElement | null;
  constructor() {
    this.document.body.style.overflow = 'hidden';
    afterNextRender(() =>
      this.element.nativeElement
        .querySelector<HTMLElement>('button')
        ?.focus({ preventScroll: true }),
    );
  }
  @HostListener('document:keydown', ['$event']) onKey(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.modalClose.emit();
    }
    if (event.key !== 'Tab') return;
    const focusable = Array.from(
      this.element.nativeElement.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], [tabindex="0"]',
      ),
    ).filter((el) => el.getClientRects().length > 0);
    const first = focusable[0],
      last = focusable.at(-1);
    if (event.shiftKey && this.document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && this.document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }
  ngOnDestroy(): void {
    this.document.body.style.overflow = this.previousOverflow;
    if (this.previousFocus?.isConnected) this.previousFocus.focus({ preventScroll: true });
  }
}
