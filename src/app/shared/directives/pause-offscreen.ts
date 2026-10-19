import { Directive, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';

/**
 * Pausa las animaciones CSS infinitas del elemento (y sus hijos) mientras está fuera de pantalla,
 * para que no sigan consumiendo frames durante el scroll. Ver `.is-offscreen` en styles/_motion.scss.
 * Uso: `<section appPauseOffscreen>`
 */
@Directive({ selector: '[appPauseOffscreen]' })
export class PauseOffscreenDirective implements OnInit, OnDestroy {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    if (typeof IntersectionObserver === 'undefined') return;

    const node = this.el.nativeElement;
    this.observer = new IntersectionObserver(([entry]) =>
      node.classList.toggle('is-offscreen', !entry.isIntersecting),
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
